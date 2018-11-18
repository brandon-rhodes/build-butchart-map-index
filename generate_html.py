#!/usr/bin/env python

from __future__ import print_function

import argparse
import json
import sys

def main(argv):
    parser = argparse.ArgumentParser(description='Process some integers.')
    parser.add_argument('path', help='path to concatenated archive pages')
    args = parser.parse_args(argv)

    index = ['<html><body>']

    for line in open(args.path):
        if line.startswith('thisImageInfo'):
            j = json.loads(line.rstrip('\n;').split(' = ')[1])
            height = j['imageinfo']['height']
            width = j['imageinfo']['width']
            title = j['imageinfo']['title']['0']
        elif line.startswith('thisItemId'):
            item_id = line.split(' = ')[1].strip("\n;'")
            html = '<a href="{}.html">{}</a><br>\n'.format(item_id, title)
            index.append(html)
            rotate = '0'
            if item_id == '61188':
                rotate = '270'
            with open('{}.html'.format(item_id), 'w') as f:
                f.write(HTML.format(**locals()))

    #print(''.join(index))

HTML = '''\
<html><head>
<title>{title}</title>
<body>
<a href="./">Back to index</a>
<h1>{title}</h1>
<div id="openseadragon1" style="width: 600px; height: 600px;"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.0/openseadragon.min.js"></script>
<script src="tiling.js"></script>
<script>
start_seadragon({item_id}, {width}, {height}, {rotate});
</script>
'''

if __name__ == '__main__':
    main(sys.argv[1:])
