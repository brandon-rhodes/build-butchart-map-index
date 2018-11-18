#!/usr/bin/env python

from __future__ import print_function

import argparse
import csv
import json
import sys
from collections import namedtuple

Quad = namedtuple('Quad', 'name scale lat1 lon1 lat2 lon2 url')
outliers = {
    'Emmett Wash': '62500',
    'Navajo Mountain': '62500',
    'Mt. Dellenbaugh': '24000',
    'Paria Plateau': '62500',
    'Separation Canyon': '24000',
}

def main(argv):
    parser = argparse.ArgumentParser(description='Generate shapes.')
    parser.parse_args(argv)

    search_results = list(open('search_result.html'))
    targets = {}

    # Make a list of the Butchart map quadrangles.

    for line in search_results:
        if not 'results_tn_img' in line:
            continue
        name = line.split('alt="')[1].split(',')[0].split(' Quad')[0]
        item_id = line.split('item_id="')[1].split('"')[0]
        if name == 'Coconino Point NE':
            name = 'Coconino Pt NE'

        if 'Amos Point' in line:
            key = (name, '24000')
        elif '15 minute' in line:
            if '195' in line or '196' in line:
                key = (name, '62500')
            else:
                key = (name, '125000')
        elif '7.5 minute' in line:
            key = (name, '24000')
        elif name in outliers:
            key = (name, outliers[name])
        else:
            #print(line)
            continue

        url = '{}.html'.format(item_id)
        targets[key] = url

    # Scan the huge USGS data file to learn the boundaries of each
    # quadrangle we care about, generating a list of Quad tuples.

    r = csv.reader(open('topomaps_all.csv'))
    quads = []

    for row in r:
        key = (row[3], row[5])
        if key not in targets:
            continue
        url = targets.pop(key)
        name, scale = key
        q = Quad(name, int(scale), float(row[45]), float(row[46]),
                 float(row[47]), float(row[48]), url)
        quads.append(q)

    if targets:
        print('Not found:')
        print(targets)

    # Add in the two big maps.

    quads.append(Quad('Grand Canyon National Park (West half)',
                      48000,
                      36 + 25/60.0, -112 - 45/60.0,
                      36, -112 - 15/60.0,
                      '66648.html'))

    quads.append(Quad('Grand Canyon National Park (East half)',
                      48000,
                      36 + 25/60.0, -112 - 15/60.0,
                      36, -111 - 45/60.0,
                      '66649.html'))

    # Finally, output the script with embedded quadrangle data.

    quads = sorted(quads, key=lambda q: -q.scale)

    data = {
        'lat1': max(q.lat1 for q in quads),
        'lon1': max(q.lon1 for q in quads),
        'lat2': min(q.lat2 for q in quads),
        'lon2': min(q.lon2 for q in quads),
        'quads': list(q._asdict() for q in quads),
    }
    data['lat'] = (data['lat1'] + data['lat2']) / 2.0
    data['lon'] = (data['lon1'] + data['lon2']) / 2.0

    j = json.dumps(data, indent=4)
    open('quad_data.js', 'w').write('var quad_data = {};\n'.format(j))

if __name__ == '__main__':
    main(sys.argv[1:])
