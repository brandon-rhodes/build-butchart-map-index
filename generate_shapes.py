#!/usr/bin/env python

from __future__ import print_function

import argparse
import csv
import json
import sys
from collections import namedtuple

Quad = namedtuple('Quad', 'name lat1 lon1 lat2 lon2')

def main(argv):
    parser = argparse.ArgumentParser(description='Generate shapes.')
    parser.parse_args(argv)

    targets = {('Camp Verde', '125000')}

    r = csv.reader(open('topomaps_all.csv'))
    quads = []

    for row in r:
        key = (row[3], row[5])
        if key not in targets:
            continue
        targets.remove(key)
        name, scale = key
        print(row)
        q = Quad(name, float(row[45]), float(row[46]),
                 float(row[47]), float(row[48]))
        quads.append(q)

    data = {
        'lat1': min(q.lat1 for q in quads),
        'lon1': min(q.lon1 for q in quads),
        'lat2': min(q.lat2 for q in quads),
        'lon2': min(q.lon2 for q in quads),
        'quads': list(q._asdict() for q in quads),
    }
    data['lat'] = (data['lat1'] + data['lat2']) / 2.0
    data['lon'] = (data['lon1'] + data['lon2']) / 2.0

    script = open('script.js.in').read()
    script = script.replace('{DATA}', json.dumps(data))
    open('script.js', 'w').write(script)

if __name__ == '__main__':
    main(sys.argv[1:])
