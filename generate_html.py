#!/usr/bin/env python
# -*- coding: utf-8 -*-

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
                f.write(HTML.format(**locals()).encode('utf-8'))

    #print(''.join(index))

HTML = u'''\
<html><head>
<meta charset="utf-8" />
<title>{title}</title>
<style>
  #map {{height: 90vh; width: 100%;}}
  p {{max-width: 40em;}}
</style>
<body>
<a href="./">← Back to overview map</a>
<h1>Harvey Butchart map: {title}</h1>
<p>
As you zoom and scroll the map below,
its data will load directly from the servers
of the <a href="http://www.nau.edu/library">Cline Library</a>
at <a href="https://nau.edu/">Northern Arizona University</a>
which hosts the Harvey Butchart Collection —
the maps and trail logs
of famed Grand Canyon backpacker Harvey Butchart (1907–2002)
who taught in their mathematics department.
</p>
<p>
I offer this page because I find the modern
<a href="https://openseadragon.github.io/">OpenSeadragon</a>
image viewer, used below, makes zooming and scrolling easier
than on the Cline Library’s web site.
Here is their official page for this map:
<a href="http://archive.library.nau.edu/cdm/ref/collection/cpa/id/{item_id}">http://archive.library.nau.edu/cdm/ref/collection/cpa/id/{item_id}</a>
</p>
<div id="map"></div>
<p>
(This page itself courtesy of
<a href="https://rhodesmill.org/brandon">Brandon Rhodes</a>)
</p>
<script src="https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.0/openseadragon.min.js"></script>
<script src="tiling.js"></script>
<script>
start_seadragon({item_id}, {width}, {height}, {rotate});
</script>
'''

if __name__ == '__main__':
    main(sys.argv[1:])
