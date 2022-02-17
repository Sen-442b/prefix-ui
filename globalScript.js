function includeModule(filePath){
    let script = document.createElement("script");
    script.src=filePath;
    script.type="text/javascript";
    script.defer=true;
    document.getElementsByTagName("head").item(0).appendChild(script);
}


includeModule("https://cdn.jsdelivr.net/gh/sen-442b/nameless-component-library@latest/Input/source/main.js");
// includeModule("./Components//Avatar-Badge/source/main.js");
// includeModule("./Components/Alert-Button/source/main.js");
// includeModule("./Components/Input/source/main.js");
// includeModule("./Components/Navigation/source/main.js");