Package.describe({
    name: 'polyroid:iron-icons',
    version: '1.0.4',
    summary: 'A set of icons for use with iron-icon',
    git: 'https://github.com/Polyroid/iron-icons.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:iron-icon@1.0.0',
        'polyroid:iron-iconset-svg@1.0.0',
        'polyroid:polymer@1.0.0'
    ], 'client');

    api.addAssets([
        'av-icons.html',
        'communication-icons.html',
        'device-icons.html',
        'editor-icons.html',
        'hardware-icons.html',
        'hero.svg',
        'image-icons.html',
        'iron-icons.html',
        'maps-icons.html',
        'notification-icons.html',
        'social-icons.html'
    ], 'client');
});
