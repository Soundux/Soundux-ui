export default {
  welcome: {
    title: 'Willkommen zu {programName}',
    noTabs:
      'Zurzeit sind keine Tabs vorhanden. Fügen Sie einen hinzu, indem Sie {addTab} auf der rechten Seite klicken',
  },
  outputApp: {
    title: 'Ausgabe-Anwendung',
    info: 'Die Anwendung zu der der Sound abgespielt werden soll',
  },
  outputDevice: {
    title: 'Ausgabe-Gerät',
    info: 'Das Gerät zu dem der Sound abgespielt werden soll',
  },
  actions: {
    refresh: 'Aktualisieren',
    stop: 'Stopp',
    search: 'Suche',
    addTab: 'Tab hinzufügen',
    reloadSounds: 'Sounds aktualisieren',
    play: 'Abspielen',
  },
  settings: {
    title: 'Einstellungen',
    tabHotkeysOnly: 'Hotkeys nur für aktuellen Tab',
    allowOverlapping: 'Tonüberlappung zulassen',
    gridView: 'Rasteransicht',
    useAsDefaultDevice: 'Als Standardgerät verwenden',
    darkTheme: 'Dunkles Design',
    stopHotkey: 'Stopp-Hotkey',
  },
  switchOnConnect: {
    title: 'Switch on connect Modul gefunden!',
    disable: 'Jetzt deaktivieren',
    explanation: {
      line1: 'Das PulseAudio {moduleName} Modul wurde gefunden.',
      line2: 'Dies verursacht schwerwiegende Probleme!',
      line3: 'Um Soundux weiter zu verwenden, deaktivieren Sie es bitte.',
      line4:
        'Weitere Informationen (z.B. wie Sie es dauerhaft deaktivieren können) finden Sie auf {wikiPage}',
      wikiPage: 'unserer dafür vorgesehenen Wiki-Seite (Englisch)',
    },
  },
  hotkeys: {
    title: 'Hotkey setzen',
    hotkey: 'Hotkey',
    setFor: 'Setze Hotkey für {soundName}',
  },
  help: {
    title: 'Hilfe',
    ctrl: 'STRG',
    search: {
      text: 'Drücke {ctrl} + {f} um zu {search}',
      search: 'suchen',
    },
    play: {
      text: '{doubleClick} um {play}',
      doubleClick: 'Doppelklick',
      play: 'abzuspielen',
    },
    appPassThrough: {
      text: 'Drücke {ctrl} + {g} um {show}',
      show: 'App durchreichen anzuzeigen',
    },
  },
  volume: {
    local: 'Lokale Lautstärke',
    remote: 'Ausgabe Lautstärke',
    sync: 'Lautstärken synchronisieren',
  },
  appPassThrough: 'App durchreichen',
};