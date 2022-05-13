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
              const req = new Request('https://cdn.jsdelivr.net/gh/Mythical-Forest-Collective/PkRevolt@master/index.js');
              fetch(req, {mode:'cors'})
                .then((res) => {
                  res.text().then((text) => {
                    eval("state.plugins.add("+text+")");
                })
              })
            },
            onUnload: () => {
              console.log('[Masquerader-Updater] Unloading Masquerader...');
              try {
                state.plugins.remove("mythical-forest-collective", "masquerader");
              } catch(err) {
                console.log('[Masquerader-Updater] '+err);
              }
            }
        }
    }`
}
