{
    format: 1,
    version: "0.0.1",
    namespace: "mythical-forest-collective",
    id: "masquerader",
    entrypoint: `(state) => {
        console.log('[Masquerader] Plugin init!');
        return {
            onClient: c => console.log('[Masquerader] Acquired Client:', c, '\\nHello', c.user.username + '!'),
            onUnload: () => console.log('[Masquerader] bye!')
        }
    }`
}
