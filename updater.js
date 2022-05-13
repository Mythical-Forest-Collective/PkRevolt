{
    format: 1,
    version: "0.0.1",
    namespace: "mythical-forest-collective",
    id: "masquerader-updater",
    entrypoint: `(state) => {
        console.log('[Masquerader-Updater] Plugin init!');
        return {
            onClient: c => {
              console.log('[Masquerader-Updater] Loading Masquerader...');
              const req = new Request('https://github.com/Mythical-Forest-Collective/PkRevolt/raw/master/index.js');
              fetch(req)
                .then((res) => {
                  res.text().then((text) => {
                    eval("state.plugins.add("+text+")");
                })
              })
            },
            onUnload: () => {
              console.log('[Masquerader-Updater] Unloading Masquerader...');
              state.plugins.remove("mythical-forest-collective", "masquerader");
            }
        }
    }`
}
