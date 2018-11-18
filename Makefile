
default: script.js

script.js: generate_shapes.py search_result.html script.js.in topomaps_all.csv
	python generate_shapes.py

# search_pages.html generate_html.py
# 	python generate_html.py $< > /tmp/output
# 	mv /tmp/output $@

search_pages.html: search_urls.txt
	for path in $$(cat $<) ;do curl -s http://archive.library.nau.edu$$path; done > $@

search_urls.txt: search_result.html
	grep -P -o '(/cdm/singleitem/[^"]*)' $< | sort -u > $@

search_result.html:
	curl 'http://archive.library.nau.edu/cdm/search/searchterm/butchart%20stillimage/field/all/mode/all/conn/and/display/200/order/nosort/ad/asc' > $@

topomaps_all.csv: topomaps_all.zip
	unzip $<

# From https://www.usgs.gov/faqs/where-can-i-get-index-us-topo-maps
topomaps_all.zip:
	wget http://thor-f5.er.usgs.gov/ngtoc/metadata/misc/topomaps_all.zip
