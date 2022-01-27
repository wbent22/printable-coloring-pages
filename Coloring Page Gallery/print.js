
function ImagetoPrint(source)   //Prints the picture onto the page
{
    return "<html><head><scri"+"pt>function step1(){\n" +
            "setTimeout('step2()', 10);}\n" +
            "function step2(){window.print();window.close()}\n" +
            "</scri" + "pt></head><body onload='step1()'>\n" +
            "<img style='width: 8in; height: 10in;' src='" + source + "' /></body></html>";
}
        
function PrintImage(source) //Opens a new page
{
    var Pagelink = "about:blank";
    var pwa = window.open(Pagelink, "_new");
    pwa.document.open();
    pwa.document.write(ImagetoPrint(source));
    pwa.document.close();
}

//Animals
apic1="http://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2020/10/lion-coloring-page.jpg";
apic2="http://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2013/04/imperial-amazon-parrot-coloring-page.jpg";
apic3="http://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2015/01/madagascar-tomato-frog-coloring-page.png";
apic4="http://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2014/11/protoceraptos-dinosaur-coloring-page.jpg";

//Kids
kpic1="https://www.crayola.com/-/media/Crayola/Coloring-Page/coloring_pages/Frozen1_3.png?h=560&la=en&mh=560&mw=540&w=420";
kpic2="https://www.crayola.com/-/media/Crayola/Coloring-Page/trolls/trollsPoppy.png?h=560&la=en&mh=560&mw=540&w=420";
kpic3="https://www.justcolor.net/kids/wp-content/uploads/sites/12/nggallery/mickey/Coloring-for-kids-mickey-8600.gif";
kpic4="https://www.justcolor.net/kids/wp-content/uploads/sites/12/nggallery/moana/Coloring-for-kids-moana-94981.jpg";

//Flowers
fpic1="http://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2015/09/cherokee-rose-coloring-page.jpg";
fpic2="https://coloringhome.com/coloring/M8T/ELn/M8TELn7ia.jpg";
fpic3="https://www.happierhuman.com/wp-content/uploads/2021/12/flower-coloring-adults-wonder-day-garden-flowers-768x717.jpg";
fpic4="https://www.colorwithfuzzy.com/images/vase-flowers-coloring-pages.png";

//Complex
cpic1="https://www.bestappsforkids.com/wp-content/uploads/2017/11/complex-coloring-pages-for-kids.jpeg";
cpic2="https://www.crayola.com/-/media/Crayola/Coloring-Page/coloring_pages2017/skull.jpg?h=560&la=en&mh=560&mw=540&w=472";
cpic3="https://s3images.coroflot.com/user_files/individual_files/large_154290_fvlfqd025nc_gnjnwcnazpeyk.jpg";
cpic4="https://juliepaschkis.files.wordpress.com/2021/11/felicitous-felines.jpg?w=791";