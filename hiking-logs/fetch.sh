#!/bin/bash

URLS='http://archive.library.nau.edu/u?/cpa,66650
http://archive.library.nau.edu/u?/cpa,66651
http://archive.library.nau.edu/u?/cpa,66652
http://archive.library.nau.edu/u?/cpa,66653
http://archive.library.nau.edu/u?/cpa,66654
http://archive.library.nau.edu/u?/cpa,66655
http://archive.library.nau.edu/u?/cpa,66656
http://archive.library.nau.edu/u?/cpa,66657
http://archive.library.nau.edu/u?/cpa,66658
http://archive.library.nau.edu/u?/cpa,66659
http://archive.library.nau.edu/u?/cpa,66660
http://archive.library.nau.edu/u?/cpa,66661
http://archive.library.nau.edu/u?/cpa,66662
http://archive.library.nau.edu/u?/cpa,66663
http://archive.library.nau.edu/u?/cpa,66664
http://archive.library.nau.edu/u?/cpa,66665
http://archive.library.nau.edu/u?/cpa,66666
http://archive.library.nau.edu/u?/cpa,66667
http://archive.library.nau.edu/u?/cpa,66669
http://archive.library.nau.edu/u?/cpa,66668
http://archive.library.nau.edu/u?/cpa,66670
http://archive.library.nau.edu/u?/cpa,66671
http://archive.library.nau.edu/u?/cpa,66672
http://archive.library.nau.edu/u?/cpa,66673
http://archive.library.nau.edu/u?/cpa,66674
http://archive.library.nau.edu/u?/cpa,66675
http://archive.library.nau.edu/u?/cpa,66680
http://archive.library.nau.edu/u?/cpa,66681
http://archive.library.nau.edu/u?/cpa,66676
http://archive.library.nau.edu/u?/cpa,66677
http://archive.library.nau.edu/u?/cpa,66678
http://archive.library.nau.edu/u?/cpa,66679'

for url in $URLS
do
    pdf_url=$(curl -Ls $url | grep '<embed ' | sed 's/[^"]*"//;s/".*//')
    wget "http://archive.library.nau.edu$pdf_url"
done

pdftk 688*.pdf cat output combined.pdf
