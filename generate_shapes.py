#!/usr/bin/env python

from __future__ import print_function

import argparse
import csv
import json
import sys
from collections import namedtuple

Quad = namedtuple('Quad', 'name lat1 lon1 lat2 lon2 href')

def main(argv):
    parser = argparse.ArgumentParser(description='Generate shapes.')
    parser.parse_args(argv)

    search_results = list(open('search_result.html'))
    targets = {}

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
        else:
            continue

        href = '{}.html'.format(item_id)
        targets[key] = href

    r = csv.reader(open('topomaps_all.csv'))
    quads = []

    for row in r:
        key = (row[3], row[5])
        if key not in targets:
            continue
        href = targets.pop(key)
        name, scale = key
        q = Quad(name, float(row[45]), float(row[46]),
                 float(row[47]), float(row[48]), href)
        quads.append(q)

    if targets:
        print('Not found:')
        print(targets)

    data = {
        'lat1': max(q.lat1 for q in quads),
        'lon1': max(q.lon1 for q in quads),
        'lat2': min(q.lat2 for q in quads),
        'lon2': min(q.lon2 for q in quads),
        'quads': list(q._asdict() for q in quads),
    }
    data['lat'] = (data['lat1'] + data['lat2']) / 2.0
    data['lon'] = (data['lon1'] + data['lon2']) / 2.0

    script = open('script.js.in').read()
    script = script.replace('{{DATA}}', json.dumps(data, indent=4))
    open('script.js', 'w').write(script)

if __name__ == '__main__':
    main(sys.argv[1:])
