/*!
 * Neiki's Table 1.0.0
 * A lightweight, dependency-free data table Web Component.
 * https://github.com/neikiri/neiki-table
 * MIT License
 */
(function () {
  'use strict';

  if (customElements.get('neiki-table')) {
    return;
  }

  // ---------------------------------------------------------------------
  // i18n
  // ---------------------------------------------------------------------

  var I18N = {
    en: {
      searchPlaceholder: 'Search…',
      filterPlaceholder: 'Filter…',
      noResults: 'No matching rows found.',
      noData: 'No data available.',
      selectAll: 'Select all rows',
      selectRow: 'Select row',
      actions: 'Actions',
      edit: 'Edit',
      save: 'Save',
      cancel: 'Cancel',
      clearFilters: 'Clear filters',
      exportCsv: 'Export CSV',
      exportJson: 'Export JSON',
      rowsPerPage: 'Rows per page',
      previous: 'Previous',
      next: 'Next',
      pageOf: 'Page {page} of {pages}',
      showingRange: 'Showing {start}–{end} of {total}',
      showingNone: 'No rows to show',
      all: 'All',
      yes: 'Yes',
      no: 'No',
      selectedCount: '{count} selected',
      copy: 'Copy',
      copied: 'Copied',
      loading: 'Loading…',
      firstPage: 'First page',
      lastPage: 'Last page',
      gotoPage: 'Go to page {page}',
      resultsAnnounce: '{total} rows'
    },
    cs: {
      searchPlaceholder: 'Hledat…',
      filterPlaceholder: 'Filtrovat…',
      noResults: 'Nebyly nalezeny žádné odpovídající řádky.',
      noData: 'Žádná data k dispozici.',
      selectAll: 'Vybrat všechny řádky',
      selectRow: 'Vybrat řádek',
      actions: 'Akce',
      edit: 'Upravit',
      save: 'Uložit',
      cancel: 'Zrušit',
      clearFilters: 'Vymazat filtry',
      exportCsv: 'Export CSV',
      exportJson: 'Export JSON',
      rowsPerPage: 'Řádků na stránku',
      previous: 'Předchozí',
      next: 'Další',
      pageOf: 'Stránka {page} z {pages}',
      showingRange: 'Zobrazeno {start}–{end} z {total}',
      showingNone: 'Žádné řádky k zobrazení',
      all: 'Vše',
      yes: 'Ano',
      no: 'Ne',
      selectedCount: 'Vybráno: {count}',
      copy: 'Kopírovat',
      copied: 'Zkopírováno',
      loading: 'Načítání…',
      firstPage: 'První stránka',
      lastPage: 'Poslední stránka',
      gotoPage: 'Přejít na stránku {page}',
      resultsAnnounce: 'Řádků: {total}'
    },
    de: {
      searchPlaceholder: 'Suchen…',
      filterPlaceholder: 'Filtern…',
      noResults: 'Keine passenden Zeilen gefunden.',
      noData: 'Keine Daten verfügbar.',
      selectAll: 'Alle Zeilen auswählen',
      selectRow: 'Zeile auswählen',
      actions: 'Aktionen',
      edit: 'Bearbeiten',
      save: 'Speichern',
      cancel: 'Abbrechen',
      clearFilters: 'Filter zurücksetzen',
      exportCsv: 'CSV exportieren',
      exportJson: 'JSON exportieren',
      rowsPerPage: 'Zeilen pro Seite',
      previous: 'Zurück',
      next: 'Weiter',
      pageOf: 'Seite {page} von {pages}',
      showingRange: '{start}–{end} von {total} angezeigt',
      showingNone: 'Keine Zeilen vorhanden',
      all: 'Alle',
      yes: 'Ja',
      no: 'Nein',
      selectedCount: '{count} ausgewählt',
      copy: 'Kopieren',
      copied: 'Kopiert',
      loading: 'Wird geladen…',
      firstPage: 'Erste Seite',
      lastPage: 'Letzte Seite',
      gotoPage: 'Zu Seite {page}',
      resultsAnnounce: '{total} Zeilen'
    },
    es: {
      searchPlaceholder: 'Buscar…',
      filterPlaceholder: 'Filtrar…',
      noResults: 'No se encontraron filas coincidentes.',
      noData: 'No hay datos disponibles.',
      selectAll: 'Seleccionar todas las filas',
      selectRow: 'Seleccionar fila',
      actions: 'Acciones',
      edit: 'Editar',
      save: 'Guardar',
      cancel: 'Cancelar',
      clearFilters: 'Borrar filtros',
      exportCsv: 'Exportar CSV',
      exportJson: 'Exportar JSON',
      rowsPerPage: 'Filas por página',
      previous: 'Anterior',
      next: 'Siguiente',
      pageOf: 'Página {page} de {pages}',
      showingRange: 'Mostrando {start}–{end} de {total}',
      showingNone: 'No hay filas que mostrar',
      all: 'Todos',
      yes: 'Sí',
      no: 'No',
      selectedCount: '{count} seleccionadas',
      copy: 'Copiar',
      copied: 'Copiado',
      loading: 'Cargando…',
      firstPage: 'Primera página',
      lastPage: 'Última página',
      gotoPage: 'Ir a la página {page}',
      resultsAnnounce: '{total} filas'
    },
    fr: {
      searchPlaceholder: 'Rechercher…',
      filterPlaceholder: 'Filtrer…',
      noResults: 'Aucune ligne correspondante trouvée.',
      noData: 'Aucune donnée disponible.',
      selectAll: 'Sélectionner toutes les lignes',
      selectRow: 'Sélectionner la ligne',
      actions: 'Actions',
      edit: 'Modifier',
      save: 'Enregistrer',
      cancel: 'Annuler',
      clearFilters: 'Effacer les filtres',
      exportCsv: 'Exporter en CSV',
      exportJson: 'Exporter en JSON',
      rowsPerPage: 'Lignes par page',
      previous: 'Précédent',
      next: 'Suivant',
      pageOf: 'Page {page} sur {pages}',
      showingRange: 'Affichage de {start}–{end} sur {total}',
      showingNone: 'Aucune ligne à afficher',
      all: 'Tous',
      yes: 'Oui',
      no: 'Non',
      selectedCount: '{count} sélectionnée(s)',
      copy: 'Copier',
      copied: 'Copié',
      loading: 'Chargement…',
      firstPage: 'Première page',
      lastPage: 'Dernière page',
      gotoPage: 'Aller à la page {page}',
      resultsAnnounce: '{total} lignes'
    },
    it: {
      searchPlaceholder: 'Cerca…',
      filterPlaceholder: 'Filtra…',
      noResults: 'Nessuna riga corrispondente trovata.',
      noData: 'Nessun dato disponibile.',
      selectAll: 'Seleziona tutte le righe',
      selectRow: 'Seleziona riga',
      actions: 'Azioni',
      edit: 'Modifica',
      save: 'Salva',
      cancel: 'Annulla',
      clearFilters: 'Cancella filtri',
      exportCsv: 'Esporta CSV',
      exportJson: 'Esporta JSON',
      rowsPerPage: 'Righe per pagina',
      previous: 'Precedente',
      next: 'Successivo',
      pageOf: 'Pagina {page} di {pages}',
      showingRange: 'Visualizzazione di {start}–{end} su {total}',
      showingNone: 'Nessuna riga da mostrare',
      all: 'Tutti',
      yes: 'Sì',
      no: 'No',
      selectedCount: '{count} selezionate',
      copy: 'Copia',
      copied: 'Copiato',
      loading: 'Caricamento…',
      firstPage: 'Prima pagina',
      lastPage: 'Ultima pagina',
      gotoPage: 'Vai alla pagina {page}',
      resultsAnnounce: '{total} righe'
    },
    pl: {
      searchPlaceholder: 'Szukaj…',
      filterPlaceholder: 'Filtruj…',
      noResults: 'Nie znaleziono pasujących wierszy.',
      noData: 'Brak dostępnych danych.',
      selectAll: 'Zaznacz wszystkie wiersze',
      selectRow: 'Zaznacz wiersz',
      actions: 'Akcje',
      edit: 'Edytuj',
      save: 'Zapisz',
      cancel: 'Anuluj',
      clearFilters: 'Wyczyść filtry',
      exportCsv: 'Eksportuj CSV',
      exportJson: 'Eksportuj JSON',
      rowsPerPage: 'Wierszy na stronę',
      previous: 'Poprzednia',
      next: 'Następna',
      pageOf: 'Strona {page} z {pages}',
      showingRange: 'Wyświetlanie {start}–{end} z {total}',
      showingNone: 'Brak wierszy do wyświetlenia',
      all: 'Wszystkie',
      yes: 'Tak',
      no: 'Nie',
      selectedCount: 'Zaznaczono: {count}',
      copy: 'Kopiuj',
      copied: 'Skopiowano',
      loading: 'Ładowanie…',
      firstPage: 'Pierwsza strona',
      lastPage: 'Ostatnia strona',
      gotoPage: 'Przejdź do strony {page}',
      resultsAnnounce: 'Wierszy: {total}'
    },
    sk: {
      searchPlaceholder: 'Hľadať…',
      filterPlaceholder: 'Filtrovať…',
      noResults: 'Neboli nájdené žiadne zodpovedajúce riadky.',
      noData: 'Nie sú k dispozícii žiadne dáta.',
      selectAll: 'Vybrať všetky riadky',
      selectRow: 'Vybrať riadok',
      actions: 'Akcie',
      edit: 'Upraviť',
      save: 'Uložiť',
      cancel: 'Zrušiť',
      clearFilters: 'Vymazať filtre',
      exportCsv: 'Exportovať CSV',
      exportJson: 'Exportovať JSON',
      rowsPerPage: 'Riadkov na stránku',
      previous: 'Predchádzajúca',
      next: 'Ďalšia',
      pageOf: 'Stránka {page} z {pages}',
      showingRange: 'Zobrazené {start}–{end} z {total}',
      showingNone: 'Žiadne riadky na zobrazenie',
      all: 'Všetky',
      yes: 'Áno',
      no: 'Nie',
      selectedCount: 'Vybraté: {count}',
      copy: 'Kopírovať',
      copied: 'Skopírované',
      loading: 'Načítava sa…',
      firstPage: 'Prvá stránka',
      lastPage: 'Posledná stránka',
      gotoPage: 'Prejsť na stránku {page}',
      resultsAnnounce: 'Riadkov: {total}'
    }
  };

  var FALLBACK_LOCALE = 'en';

  function translate(locale, dictionaries, key, vars) {
    var dict = dictionaries[locale] || dictionaries[FALLBACK_LOCALE] || {};
    var fallback = dictionaries[FALLBACK_LOCALE] || {};
    var text = dict[key] !== undefined ? dict[key] : fallback[key] !== undefined ? fallback[key] : key;
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        text = text.replace('{' + name + '}', String(vars[name]));
      });
    }
    return text;
  }

  // ---------------------------------------------------------------------
  // Constants
  // ---------------------------------------------------------------------

  var VALID_THEMES = ['light', 'dark', 'auto'];
  var VALID_TYPES = ['text', 'number', 'boolean', 'date', 'select'];
  var VALID_DENSITIES = ['compact', 'normal', 'spacious'];
  var VALID_ALIGN = ['left', 'center', 'right'];
  var PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
  var MIN_COLUMN_WIDTH = 60;

  var DEFAULT_CONFIG = {
    locale: 'en',
    theme: 'auto',
    density: 'normal',
    rowKey: 'id',
    searchable: true,
    filterable: true,
    selectable: true,
    editable: true,
    paginated: true,
    exportable: true,
    resizable: true,
    pageSize: 10,
    searchDebounce: 180
  };

  function oneOf(value, list, fallback) {
    return list.indexOf(value) !== -1 ? value : fallback;
  }

  function toBool(value, fallback) {
    if (value === true || value === false) return value;
    if (value === 'true') return true;
    if (value === 'false') return false;
    return fallback;
  }

  function getValue(row, key) {
    return row ? row[key] : undefined;
  }

  function formatDisplay(value, column, locale) {
    if (value === null || value === undefined || value === '') return '';
    switch (column.type) {
      case 'number': {
        var num = Number(value);
        return isNaN(num) ? String(value) : num.toLocaleString(locale);
      }
      case 'boolean':
        return value ? 'yes' : 'no';
      case 'date': {
        var date = new Date(value);
        return isNaN(date.getTime()) ? String(value) : date.toLocaleDateString(locale);
      }
      case 'select': {
        var opt = findOption(column, value);
        return opt ? opt.label : String(value);
      }
      default:
        return String(value);
    }
  }

  function findOption(column, value) {
    var options = normalizeOptions(column);
    for (var i = 0; i < options.length; i++) {
      if (String(options[i].value) === String(value)) return options[i];
    }
    return null;
  }

  function normalizeOptions(column) {
    var raw = column.options || [];
    return raw.map(function (opt) {
      if (opt && typeof opt === 'object') {
        return { value: opt.value, label: opt.label !== undefined ? opt.label : String(opt.value) };
      }
      return { value: opt, label: String(opt) };
    });
  }

  function compareValues(a, b, type) {
    var av = a, bv = b;
    if (av === null || av === undefined) av = '';
    if (bv === null || bv === undefined) bv = '';
    if (type === 'number') {
      return (Number(av) || 0) - (Number(bv) || 0);
    }
    if (type === 'boolean') {
      return (av ? 1 : 0) - (bv ? 1 : 0);
    }
    if (type === 'date') {
      return new Date(av).getTime() - new Date(bv).getTime();
    }
    return String(av).localeCompare(String(bv));
  }

  function csvEscape(value) {
    var text = value === null || value === undefined ? '' : String(value);
    if (/^[=+\-@\t\r]/.test(text)) {
      text = "'" + text;
    }
    if (/[",\n\r]/.test(text)) {
      text = '"' + text.replace(/"/g, '""') + '"';
    }
    return text;
  }

  function downloadBlob(content, mime, filename) {
    var blob = new Blob([content], { type: mime });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  // ---------------------------------------------------------------------
  // Styling (shared adopted stylesheet, mirrors neiki-social-bar)
  // ---------------------------------------------------------------------

  // Replaced by minify.py at build time with the actual (minified) CSS text.
  // Stays empty in src/ so development can edit neiki-table.css without
  // rebuilding — the component falls back to a sibling <link> in that case.
  var EMBEDDED_CSS = '';

  var sharedSheet = null;
  var sharedSheetFailed = false;

  function getSharedSheet(cssText) {
    if (sharedSheet || sharedSheetFailed) return sharedSheet;
    if (typeof CSSStyleSheet === 'undefined' || !('adoptedStyleSheets' in Document.prototype)) {
      sharedSheetFailed = true;
      return null;
    }
    try {
      sharedSheet = new CSSStyleSheet();
      sharedSheet.replaceSync(cssText);
    } catch (err) {
      sharedSheet = null;
      sharedSheetFailed = true;
    }
    return sharedSheet;
  }

  var TEMPLATE = document.createElement('template');
  TEMPLATE.innerHTML =
    '<div class="ntbl-root" part="root">' +
    '<div class="ntbl-toolbar" part="toolbar">' +
    '<div class="ntbl-search-wrap">' +
    '<input type="search" class="ntbl-search" part="search">' +
    '</div>' +
    '<div class="ntbl-toolbar-actions">' +
    '<span class="ntbl-selected-count" part="selected-count" hidden></span>' +
    '<button type="button" class="ntbl-clear-filters" part="button"></button>' +
    '<button type="button" class="ntbl-copy" part="button"></button>' +
    '<button type="button" class="ntbl-export-csv" part="button"></button>' +
    '<button type="button" class="ntbl-export-json" part="button"></button>' +
    '</div>' +
    '</div>' +
    '<div class="ntbl-scroll" part="scroll">' +
    '<table class="ntbl-table" part="table">' +
    '<colgroup class="ntbl-colgroup"></colgroup>' +
    '<thead class="ntbl-thead" part="thead">' +
    '<tr class="ntbl-header-row"></tr>' +
    '<tr class="ntbl-filter-row"></tr>' +
    '</thead>' +
    '<tbody class="ntbl-tbody" part="tbody"></tbody>' +
    '</table>' +
    '<div class="ntbl-empty" part="empty" hidden></div>' +
    '<div class="ntbl-loading-overlay" part="loading" aria-hidden="true">' +
    '<span class="ntbl-spinner"></span>' +
    '</div>' +
    '</div>' +
    '<div class="ntbl-footer" part="footer">' +
    '<div class="ntbl-info" part="info"></div>' +
    '<div class="ntbl-pagination" part="pagination">' +
    '<label class="ntbl-page-size-label">' +
    '<select class="ntbl-page-size" part="page-size"></select>' +
    '</label>' +
    '<button type="button" class="ntbl-first" part="button">&laquo;</button>' +
    '<button type="button" class="ntbl-prev" part="button">&lsaquo;</button>' +
    '<span class="ntbl-page-numbers" part="page-numbers"></span>' +
    '<span class="ntbl-page-indicator" part="page-indicator"></span>' +
    '<button type="button" class="ntbl-next" part="button">&rsaquo;</button>' +
    '<button type="button" class="ntbl-last" part="button">&raquo;</button>' +
    '</div>' +
    '</div>' +
    '<div class="ntbl-sr-only" role="status" aria-live="polite"></div>' +
    '</div>';

  class NeikiTable extends HTMLElement {
    constructor() {
      super();
      this._init();
    }
  }

  NeikiTable.observedAttributes = [
    'locale', 'theme', 'density', 'row-key', 'searchable', 'filterable', 'selectable',
    'editable', 'paginated', 'exportable', 'resizable', 'loading', 'search-debounce',
    'page-size', 'columns', 'data'
  ];

  NeikiTable.prototype._init = function () {
    this._ready = false;
    this._reflecting = false;
    this._mediaQuery = null;
    this._i18n = Object.assign({}, I18N);
    this._config = Object.assign({}, DEFAULT_CONFIG);
    this._columns = [];
    this._rows = [];
    this._state = {
      search: '',
      filters: {},
      sort: { key: null, dir: null },
      page: 1,
      selected: {},
      editing: null,
      columnWidths: {}
    };
    this._searchTimer = null;
    this._copyResetTimer = null;
    this._resize = null;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
    this._injectStyles();

    this._root = this.shadowRoot.querySelector('.ntbl-root');
    this._searchInput = this.shadowRoot.querySelector('.ntbl-search');
    this._selectedCountEl = this.shadowRoot.querySelector('.ntbl-selected-count');
    this._clearFiltersBtn = this.shadowRoot.querySelector('.ntbl-clear-filters');
    this._copyBtn = this.shadowRoot.querySelector('.ntbl-copy');
    this._exportCsvBtn = this.shadowRoot.querySelector('.ntbl-export-csv');
    this._exportJsonBtn = this.shadowRoot.querySelector('.ntbl-export-json');
    this._colgroup = this.shadowRoot.querySelector('.ntbl-colgroup');
    this._headerRow = this.shadowRoot.querySelector('.ntbl-header-row');
    this._filterRow = this.shadowRoot.querySelector('.ntbl-filter-row');
    this._tbody = this.shadowRoot.querySelector('.ntbl-tbody');
    this._emptyEl = this.shadowRoot.querySelector('.ntbl-empty');
    this._infoEl = this.shadowRoot.querySelector('.ntbl-info');
    this._liveRegion = this.shadowRoot.querySelector('.ntbl-sr-only');
    this._pageSizeSelect = this.shadowRoot.querySelector('.ntbl-page-size');
    this._firstBtn = this.shadowRoot.querySelector('.ntbl-first');
    this._prevBtn = this.shadowRoot.querySelector('.ntbl-prev');
    this._nextBtn = this.shadowRoot.querySelector('.ntbl-next');
    this._lastBtn = this.shadowRoot.querySelector('.ntbl-last');
    this._pageNumbers = this.shadowRoot.querySelector('.ntbl-page-numbers');
    this._pageIndicator = this.shadowRoot.querySelector('.ntbl-page-indicator');

    this._onMediaChange = this._onMediaChange.bind(this);
    this._onResizeMove = this._onResizeMove.bind(this);
    this._onResizeEnd = this._onResizeEnd.bind(this);

    var self = this;
    this._searchInput.addEventListener('input', function () {
      var value = self._searchInput.value;
      var apply = function () {
        self._searchTimer = null;
        self._state.search = value;
        self._state.page = 1;
        self._render();
        self._emit('search', { query: self._state.search });
      };
      if (self._searchTimer) clearTimeout(self._searchTimer);
      var delay = self._config.searchDebounce;
      if (delay > 0) self._searchTimer = setTimeout(apply, delay);
      else apply();
    });
    this._clearFiltersBtn.addEventListener('click', function () {
      if (self._searchTimer) { clearTimeout(self._searchTimer); self._searchTimer = null; }
      self._state.filters = {};
      self._state.search = '';
      self._state.page = 1;
      self._searchInput.value = '';
      self._render();
      self._emit('filter', { filters: {} });
    });
    this._copyBtn.addEventListener('click', function () { self.copyCSV(); });
    this._exportCsvBtn.addEventListener('click', function () { self.exportCSV(); });
    this._exportJsonBtn.addEventListener('click', function () { self.exportJSON(); });
    this._pageSizeSelect.addEventListener('change', function () {
      self.setPageSize(parseInt(self._pageSizeSelect.value, 10));
    });
    this._firstBtn.addEventListener('click', function () { self.goToPage(1); });
    this._prevBtn.addEventListener('click', function () { self.goToPage(self._state.page - 1); });
    this._nextBtn.addEventListener('click', function () { self.goToPage(self._state.page + 1); });
    this._lastBtn.addEventListener('click', function () { self.goToPage(self._lastPageCount || 1); });
  };

  NeikiTable.prototype._injectStyles = function () {
    if (EMBEDDED_CSS) {
      var sheet = getSharedSheet(EMBEDDED_CSS);
      if (sheet) {
        this.shadowRoot.adoptedStyleSheets = [sheet];
        return;
      }
      var style = document.createElement('style');
      style.textContent = EMBEDDED_CSS;
      this.shadowRoot.insertBefore(style, this.shadowRoot.firstChild);
      return;
    }
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = this._resolveStylesheetUrl();
    this.shadowRoot.insertBefore(link, this.shadowRoot.firstChild);
  };

  NeikiTable.prototype._resolveStylesheetUrl = function () {
    var scriptEl = document.currentScript;
    if (!scriptEl) {
      var scripts = document.querySelectorAll('script[src]');
      for (var i = scripts.length - 1; i >= 0; i--) {
        if (/neiki-table(\.min)?\.js/.test(scripts[i].src)) {
          scriptEl = scripts[i];
          break;
        }
      }
    }
    var src = scriptEl ? scriptEl.src : '';
    if (/\.min\.js(\?.*)?$/.test(src)) {
      return src.replace(/\.min\.js(\?.*)?$/, '.min.css$1');
    }
    if (/\.js(\?.*)?$/.test(src)) {
      return src.replace(/\.js(\?.*)?$/, '.css$1');
    }
    return 'neiki-table.css';
  };

  NeikiTable.prototype.connectedCallback = function () {
    this._readAttributesIntoConfig();
    this._render();
    if (!this._ready) {
      this._ready = true;
      this._emit('ready', { config: this.getConfig() });
    }
  };

  NeikiTable.prototype.disconnectedCallback = function () {
    if (this._mediaQuery) {
      this._mediaQuery.removeEventListener('change', this._onMediaChange);
      this._mediaQuery = null;
    }
    if (this._searchTimer) { clearTimeout(this._searchTimer); this._searchTimer = null; }
    if (this._copyResetTimer) { clearTimeout(this._copyResetTimer); this._copyResetTimer = null; }
    this._endResize();
  };

  NeikiTable.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
    if (this._reflecting || oldValue === newValue) return;
    if (name === 'columns') {
      if (newValue) {
        try { this.setColumns(JSON.parse(newValue)); } catch (err) { this._emit('error', { reason: 'invalid-columns-json' }); }
      }
      return;
    }
    if (name === 'data') {
      if (newValue) {
        try { this.setData(JSON.parse(newValue)); } catch (err) { this._emit('error', { reason: 'invalid-data-json' }); }
      }
      return;
    }
    this._readAttributesIntoConfig();
    if (this.isConnected) this._render();
  };

  NeikiTable.prototype._readAttributesIntoConfig = function () {
    var cfg = this._config;
    cfg.locale = this.getAttribute('locale') || cfg.locale || DEFAULT_CONFIG.locale;
    cfg.theme = oneOf(this.getAttribute('theme'), VALID_THEMES, cfg.theme || DEFAULT_CONFIG.theme);
    cfg.density = oneOf(this.getAttribute('density'), VALID_DENSITIES, cfg.density || DEFAULT_CONFIG.density);
    cfg.rowKey = this.getAttribute('row-key') || cfg.rowKey || DEFAULT_CONFIG.rowKey;
    cfg.searchable = toBool(this.getAttribute('searchable'), cfg.searchable);
    cfg.filterable = toBool(this.getAttribute('filterable'), cfg.filterable);
    cfg.selectable = toBool(this.getAttribute('selectable'), cfg.selectable);
    cfg.editable = toBool(this.getAttribute('editable'), cfg.editable);
    cfg.paginated = toBool(this.getAttribute('paginated'), cfg.paginated);
    cfg.exportable = toBool(this.getAttribute('exportable'), cfg.exportable);
    cfg.resizable = toBool(this.getAttribute('resizable'), cfg.resizable);
    cfg.loading = this.hasAttribute('loading') && this.getAttribute('loading') !== 'false';
    var debounce = parseInt(this.getAttribute('search-debounce'), 10);
    if (!isNaN(debounce) && debounce >= 0) cfg.searchDebounce = debounce;
    var pageSize = parseInt(this.getAttribute('page-size'), 10);
    if (!isNaN(pageSize) && pageSize > 0) cfg.pageSize = pageSize;
  };

  NeikiTable.prototype._reflectAttributes = function () {
    this._reflecting = true;
    var cfg = this._config;
    this.setAttribute('locale', cfg.locale);
    this.setAttribute('theme', cfg.theme);
    this.setAttribute('density', cfg.density);
    if (cfg.loading) this.setAttribute('loading', '');
    else this.removeAttribute('loading');
    this._reflecting = false;
  };

  NeikiTable.prototype._resolveTheme = function () {
    if (this._config.theme !== 'auto') return this._config.theme;
    if (!this._mediaQuery) {
      this._mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      this._mediaQuery.addEventListener('change', this._onMediaChange);
    }
    return this._mediaQuery.matches ? 'dark' : 'light';
  };

  NeikiTable.prototype._onMediaChange = function () {
    if (this._config.theme === 'auto') this._render();
  };

  NeikiTable.prototype._t = function (key, vars) {
    return translate(this._config.locale, this._i18n, key, vars);
  };

  // ---------------------------------------------------------------------
  // Data pipeline
  // ---------------------------------------------------------------------

  NeikiTable.prototype._filterableColumns = function () {
    return this._columns.filter(function (col) { return col.filterable !== false; });
  };

  NeikiTable.prototype._cellText = function (row, col) {
    var value = getValue(row, col.key);
    if (typeof col.format === 'function') {
      try {
        var out = col.format(value, row);
        return out === null || out === undefined ? '' : String(out);
      } catch (err) { /* fall through to default formatting */ }
    }
    return formatDisplay(value, col, this._config.locale);
  };

  NeikiTable.prototype._computeView = function () {
    var self = this;
    var cfg = this._config;
    var state = this._state;
    var rows = this._rows.slice();

    if (cfg.searchable && state.search) {
      var query = state.search.toLowerCase();
      rows = rows.filter(function (row) {
        return self._columns.some(function (col) {
          return self._cellText(row, col).toLowerCase().indexOf(query) !== -1;
        });
      });
    }

    if (cfg.filterable) {
      Object.keys(state.filters).forEach(function (key) {
        var filterValue = state.filters[key];
        if (filterValue === undefined || filterValue === null || filterValue === '') return;
        var col = self._columns.filter(function (c) { return c.key === key; })[0];
        if (!col) return;
        rows = rows.filter(function (row) {
          var raw = getValue(row, key);
          if (col.type === 'boolean') {
            return String(!!raw) === filterValue;
          }
          if (col.type === 'select') {
            return String(raw) === filterValue;
          }
          var display = self._cellText(row, col).toLowerCase();
          return display.indexOf(String(filterValue).toLowerCase()) !== -1;
        });
      });
    }

    if (state.sort.key) {
      var sortCol = this._columns.filter(function (c) { return c.key === state.sort.key; })[0];
      var type = sortCol ? sortCol.type : 'text';
      var dir = state.sort.dir === 'desc' ? -1 : 1;
      rows.sort(function (a, b) {
        return dir * compareValues(getValue(a, state.sort.key), getValue(b, state.sort.key), type);
      });
    }

    return rows;
  };

  NeikiTable.prototype._rowKeyValue = function (row, index) {
    var key = this._config.rowKey;
    return row && row[key] !== undefined ? row[key] : '__index_' + index;
  };

  // ---------------------------------------------------------------------
  // Rendering
  // ---------------------------------------------------------------------

  NeikiTable.prototype._captureFocus = function () {
    var active = this.shadowRoot.activeElement;
    if (!active) return null;
    if (active === this._searchInput) {
      return { type: 'search', start: active.selectionStart, end: active.selectionEnd };
    }
    if (active.classList && active.classList.contains('ntbl-filter-input')) {
      return { type: 'filter', key: active.dataset.key, start: active.selectionStart, end: active.selectionEnd };
    }
    return null;
  };

  NeikiTable.prototype._restoreFocus = function (info) {
    if (!info) return;
    var el = null;
    if (info.type === 'search') {
      el = this._searchInput;
    } else if (info.type === 'filter') {
      el = this._filterRow.querySelector('.ntbl-filter-input[data-key="' + info.key + '"]');
    }
    if (!el) return;
    el.focus();
    if (typeof info.start === 'number' && typeof el.setSelectionRange === 'function') {
      try { el.setSelectionRange(info.start, info.end); } catch (err) { /* not a text selection input */ }
    }
  };

  NeikiTable.prototype._render = function () {
    var focusInfo = this._captureFocus();
    this._reflectAttributes();
    this.setAttribute('resolved-theme', this._resolveTheme());

    this._searchInput.placeholder = this._t('searchPlaceholder');
    if (document.activeElement !== this && this.shadowRoot.activeElement !== this._searchInput) {
      this._searchInput.value = this._state.search;
    }
    this._searchInput.parentElement.hidden = !this._config.searchable;
    this._clearFiltersBtn.textContent = this._t('clearFilters');
    if (!this._copyResetTimer) this._copyBtn.textContent = this._t('copy');
    this._exportCsvBtn.textContent = this._t('exportCsv');
    this._exportJsonBtn.textContent = this._t('exportJson');
    this._clearFiltersBtn.hidden = !(this._config.filterable || this._config.searchable);
    this._copyBtn.hidden = !this._config.exportable;
    this._exportCsvBtn.hidden = !this._config.exportable;
    this._exportJsonBtn.hidden = !this._config.exportable;

    var selectedKeys = Object.keys(this._state.selected).filter(function (k) { return this[k]; }, this._state.selected);
    if (this._config.selectable && selectedKeys.length > 0) {
      this._selectedCountEl.hidden = false;
      this._selectedCountEl.textContent = this._t('selectedCount', { count: selectedKeys.length });
    } else {
      this._selectedCountEl.hidden = true;
    }

    var view = this._computeView();
    var total = view.length;

    var pageSize = this._config.paginated ? this._config.pageSize : total || 1;
    var pageCount = Math.max(1, Math.ceil(total / pageSize));
    if (this._state.page > pageCount) this._state.page = pageCount;
    if (this._state.page < 1) this._state.page = 1;

    this._lastPageCount = pageCount;

    var start = this._config.paginated ? (this._state.page - 1) * pageSize : 0;
    var pageRows = this._config.paginated ? view.slice(start, start + pageSize) : view;

    this._renderColgroup();
    this._renderHeader();
    this._renderFilterRow();
    this._renderBody(pageRows, view, start);
    this._renderFooter(total, pageCount, start, pageRows.length);
    this._announce(total);
    this._restoreFocus(focusInfo);
  };

  NeikiTable.prototype._announce = function (total) {
    if (!this._liveRegion) return;
    var msg = this._t('resultsAnnounce', { total: total });
    if (this._liveRegion.textContent !== msg) this._liveRegion.textContent = msg;
  };

  NeikiTable.prototype._renderColgroup = function () {
    var self = this;
    this._colgroup.textContent = '';
    if (this._config.selectable) {
      var selCol = document.createElement('col');
      selCol.style.width = '44px';
      this._colgroup.appendChild(selCol);
    }
    this._columns.forEach(function (col) {
      var c = document.createElement('col');
      var width = self._state.columnWidths[col.key] || col.width;
      if (width) c.style.width = typeof width === 'number' ? width + 'px' : width;
      self._colgroup.appendChild(c);
    });
  };

  NeikiTable.prototype._renderHeader = function () {
    var self = this;
    var cfg = this._config;
    this._headerRow.textContent = '';

    if (cfg.selectable) {
      var th = document.createElement('th');
      th.className = 'ntbl-th ntbl-th-select';
      th.setAttribute('part', 'th');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'ntbl-select-all';
      checkbox.setAttribute('aria-label', this._t('selectAll'));
      var view = this._computeView();
      var allSelected = view.length > 0 && view.every(function (row, i) {
        return self._state.selected[self._rowKeyValue(row, i)];
      });
      checkbox.checked = allSelected;
      checkbox.addEventListener('change', function () {
        self.selectAll(checkbox.checked);
      });
      th.appendChild(checkbox);
      this._headerRow.appendChild(th);
    }

    this._columns.forEach(function (col, colIndex) {
      var cell = document.createElement('th');
      cell.className = 'ntbl-th';
      cell.setAttribute('part', 'th');
      var align = oneOf(col.align, VALID_ALIGN, 'left');
      if (align !== 'left') cell.classList.add('ntbl-th-align-' + align);

      var label = document.createElement('span');
      label.className = 'ntbl-th-label';
      label.textContent = col.label !== undefined ? col.label : col.key;
      cell.appendChild(label);

      if (col.sortable !== false) {
        cell.classList.add('ntbl-th-sortable');
        var isSorted = self._state.sort.key === col.key;
        if (isSorted) {
          cell.classList.add('ntbl-th-sorted-' + self._state.sort.dir);
          cell.setAttribute('aria-sort', self._state.sort.dir === 'asc' ? 'ascending' : 'descending');
        }
        var icon = document.createElement('span');
        icon.className = 'ntbl-sort-icon';
        icon.setAttribute('aria-hidden', 'true');
        cell.appendChild(icon);
        cell.setAttribute('tabindex', '0');
        cell.setAttribute('role', 'button');
        cell.addEventListener('click', function () { self._toggleSort(col.key); });
        cell.addEventListener('keydown', function (event) {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            self._toggleSort(col.key);
          }
        });
      }

      if (self._config.resizable && col.resizable !== false) {
        var handle = document.createElement('span');
        handle.className = 'ntbl-resize-handle';
        handle.setAttribute('aria-hidden', 'true');
        var colOffset = self._config.selectable ? 1 : 0;
        handle.addEventListener('pointerdown', function (event) {
          self._startResize(event, col.key, cell, colOffset + colIndex);
        });
        handle.addEventListener('click', function (event) { event.stopPropagation(); });
        cell.appendChild(handle);
      }

      self._headerRow.appendChild(cell);
    });
  };

  // ---------------------------------------------------------------------
  // Column resizing
  // ---------------------------------------------------------------------

  NeikiTable.prototype._startResize = function (event, key, cell, colElIndex) {
    event.preventDefault();
    event.stopPropagation();
    var colEl = this._colgroup.children[colElIndex];
    this._resize = {
      key: key,
      cell: cell,
      colEl: colEl,
      startX: event.clientX,
      startWidth: cell.getBoundingClientRect().width
    };
    cell.classList.add('ntbl-th-resizing');
    document.addEventListener('pointermove', this._onResizeMove);
    document.addEventListener('pointerup', this._onResizeEnd);
    document.addEventListener('pointercancel', this._onResizeEnd);
  };

  NeikiTable.prototype._onResizeMove = function (event) {
    if (!this._resize) return;
    var delta = event.clientX - this._resize.startX;
    var width = Math.max(MIN_COLUMN_WIDTH, Math.round(this._resize.startWidth + delta));
    if (this._resize.colEl) this._resize.colEl.style.width = width + 'px';
    this._resize.currentWidth = width;
  };

  NeikiTable.prototype._onResizeEnd = function () {
    if (!this._resize) return;
    if (this._resize.currentWidth) {
      this._state.columnWidths[this._resize.key] = this._resize.currentWidth;
      this._emit('column-resize', { key: this._resize.key, width: this._resize.currentWidth });
    }
    this._endResize();
  };

  NeikiTable.prototype._endResize = function () {
    if (this._resize && this._resize.cell) this._resize.cell.classList.remove('ntbl-th-resizing');
    document.removeEventListener('pointermove', this._onResizeMove);
    document.removeEventListener('pointerup', this._onResizeEnd);
    document.removeEventListener('pointercancel', this._onResizeEnd);
    this._resize = null;
  };

  NeikiTable.prototype._toggleSort = function (key) {
    var state = this._state;
    if (state.sort.key !== key) {
      state.sort.key = key;
      state.sort.dir = 'asc';
    } else if (state.sort.dir === 'asc') {
      state.sort.dir = 'desc';
    } else {
      state.sort.key = null;
      state.sort.dir = null;
    }
    this._render();
    this._emit('sort', { key: state.sort.key, dir: state.sort.dir });
  };

  NeikiTable.prototype._renderFilterRow = function () {
    var self = this;
    var cfg = this._config;
    this._filterRow.textContent = '';
    this._filterRow.hidden = !cfg.filterable;
    if (!cfg.filterable) return;

    if (cfg.selectable) {
      var spacer = document.createElement('th');
      spacer.className = 'ntbl-th ntbl-th-select';
      this._filterRow.appendChild(spacer);
    }

    this._columns.forEach(function (col) {
      var th = document.createElement('th');
      th.className = 'ntbl-th ntbl-filter-cell';
      if (col.filterable === false) {
        self._filterRow.appendChild(th);
        return;
      }

      var currentValue = self._state.filters[col.key] || '';

      if (col.type === 'boolean') {
        var boolSelect = document.createElement('select');
        boolSelect.className = 'ntbl-filter-input';
        boolSelect.dataset.key = col.key;
        boolSelect.appendChild(new Option(self._t('all'), ''));
        boolSelect.appendChild(new Option(self._t('yes'), 'true'));
        boolSelect.appendChild(new Option(self._t('no'), 'false'));
        boolSelect.value = currentValue;
        boolSelect.addEventListener('change', function () {
          self._setFilterInternal(col.key, boolSelect.value);
        });
        th.appendChild(boolSelect);
      } else if (col.type === 'select') {
        var select = document.createElement('select');
        select.className = 'ntbl-filter-input';
        select.dataset.key = col.key;
        select.appendChild(new Option(self._t('all'), ''));
        normalizeOptions(col).forEach(function (opt) {
          select.appendChild(new Option(opt.label, String(opt.value)));
        });
        select.value = currentValue;
        select.addEventListener('change', function () {
          self._setFilterInternal(col.key, select.value);
        });
        th.appendChild(select);
      } else {
        var input = document.createElement('input');
        input.type = 'text';
        input.className = 'ntbl-filter-input';
        input.dataset.key = col.key;
        input.placeholder = self._t('filterPlaceholder');
        input.value = currentValue;
        input.addEventListener('input', function () {
          self._setFilterInternal(col.key, input.value);
        });
        th.appendChild(input);
      }

      self._filterRow.appendChild(th);
    });
  };

  NeikiTable.prototype._setFilterInternal = function (key, value) {
    if (value === '') delete this._state.filters[key];
    else this._state.filters[key] = value;
    this._state.page = 1;
    this._render();
    this._emit('filter', { filters: Object.assign({}, this._state.filters) });
  };

  NeikiTable.prototype._renderBody = function (pageRows, fullView, offset) {
    var self = this;
    var cfg = this._config;
    this._tbody.textContent = '';

    var hasData = this._rows.length > 0;
    var hasResults = pageRows.length > 0;
    this._emptyEl.hidden = hasResults;
    if (!hasResults) {
      this._emptyEl.textContent = hasData ? this._t('noResults') : this._t('noData');
    }

    pageRows.forEach(function (row, i) {
      var index = offset + i;
      var rowKey = self._rowKeyValue(row, index);
      var tr = document.createElement('tr');
      tr.className = 'ntbl-tr';
      tr.setAttribute('part', 'tr');
      if (self._state.selected[rowKey]) tr.classList.add('ntbl-tr-selected');
      tr.addEventListener('click', function (event) {
        var tag = event.target && event.target.tagName;
        if (tag === 'INPUT' || tag === 'SELECT' || tag === 'OPTION') return;
        self._emit('row-click', { rowKey: rowKey, row: Object.assign({}, row) });
      });

      if (cfg.selectable) {
        var td = document.createElement('td');
        td.className = 'ntbl-td ntbl-td-select';
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('aria-label', self._t('selectRow'));
        checkbox.checked = !!self._state.selected[rowKey];
        checkbox.addEventListener('change', function () {
          self.selectRow(rowKey, checkbox.checked);
        });
        td.appendChild(checkbox);
        tr.appendChild(td);
      }

      self._columns.forEach(function (col) {
        var td = document.createElement('td');
        td.className = 'ntbl-td';
        td.setAttribute('part', 'td');
        var align = oneOf(col.align, VALID_ALIGN, col.type === 'number' ? 'right' : 'left');
        if (align !== 'left') td.classList.add('ntbl-td-align-' + align);
        else if (col.type === 'number') td.classList.add('ntbl-td-num');
        self._renderCell(td, row, col, rowKey);
        tr.appendChild(td);
      });

      self._tbody.appendChild(tr);
    });
  };

  NeikiTable.prototype._renderCell = function (td, row, col, rowKey) {
    var self = this;
    var value = getValue(row, col.key);
    var editable = this._config.editable && col.editable !== false;
    var isEditing = this._state.editing && this._state.editing.rowKey === rowKey && this._state.editing.key === col.key;

    if (isEditing) {
      td.classList.add('ntbl-td-editing');
      this._renderEditor(td, row, col, rowKey, value);
      return;
    }

    if (col.type === 'boolean') {
      var badge = document.createElement('span');
      badge.className = 'ntbl-badge ' + (value ? 'ntbl-badge-true' : 'ntbl-badge-false');
      badge.textContent = value ? this._t('yes') : this._t('no');
      td.appendChild(badge);
      if (editable) {
        td.classList.add('ntbl-td-editable');
        td.addEventListener('click', function () {
          self._commitEdit(rowKey, col.key, !value);
        });
      }
      return;
    }

    td.textContent = this._cellText(row, col);

    if (editable) {
      td.classList.add('ntbl-td-editable');
      td.setAttribute('tabindex', '0');
      td.addEventListener('dblclick', function () { self._startEdit(rowKey, col.key); });
      td.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') self._startEdit(rowKey, col.key);
      });
    }
  };

  NeikiTable.prototype._startEdit = function (rowKey, key) {
    this._state.editing = { rowKey: rowKey, key: key };
    this._render();
  };

  NeikiTable.prototype._renderEditor = function (td, row, col, rowKey, value) {
    var self = this;
    td.textContent = '';
    var input;

    if (col.type === 'select') {
      input = document.createElement('select');
      normalizeOptions(col).forEach(function (opt) {
        input.appendChild(new Option(opt.label, String(opt.value)));
      });
      input.value = String(value);
    } else if (col.type === 'number') {
      input = document.createElement('input');
      input.type = 'number';
      input.value = value === null || value === undefined ? '' : value;
    } else if (col.type === 'date') {
      input = document.createElement('input');
      input.type = 'date';
      input.value = value ? String(value).slice(0, 10) : '';
    } else {
      input = document.createElement('input');
      input.type = 'text';
      input.value = value === null || value === undefined ? '' : value;
    }

    input.className = 'ntbl-edit-input';

    function commit() {
      var newValue = input.value;
      if (col.type === 'number') newValue = newValue === '' ? null : Number(newValue);
      self._commitEdit(rowKey, col.key, newValue);
    }
    function cancel() {
      self._state.editing = null;
      self._render();
    }

    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') { event.preventDefault(); commit(); }
      else if (event.key === 'Escape') { event.preventDefault(); cancel(); }
    });
    input.addEventListener('blur', function () { commit(); });

    td.appendChild(input);
    requestAnimationFrame(function () { input.focus(); input.select && input.select(); });
  };

  NeikiTable.prototype._commitEdit = function (rowKey, key, newValue) {
    var self = this;
    var row = this._rows.filter(function (r, i) { return self._rowKeyValue(r, i) === rowKey; })[0];
    this._state.editing = null;
    if (!row) { this._render(); return; }
    var oldValue = row[key];
    if (oldValue === newValue) { this._render(); return; }
    row[key] = newValue;
    this._render();
    this._emit('cell-edit', { rowKey: rowKey, key: key, oldValue: oldValue, newValue: newValue, row: Object.assign({}, row) });
  };

  NeikiTable.prototype._renderFooter = function (total, pageCount, start, pageRowsLength) {
    var cfg = this._config;

    this._infoEl.textContent = total === 0
      ? this._t('showingNone')
      : this._t('showingRange', {
        start: start + 1,
        end: start + pageRowsLength,
        total: total
      });

    var paginationEl = this.shadowRoot.querySelector('.ntbl-pagination');
    paginationEl.hidden = !cfg.paginated;
    if (!cfg.paginated) return;

    this._pageSizeSelect.textContent = '';
    var self = this;
    PAGE_SIZE_OPTIONS.forEach(function (size) {
      var opt = new Option(String(size) + ' / ' + self._t('rowsPerPage'), String(size));
      opt.selected = size === cfg.pageSize;
      self._pageSizeSelect.appendChild(opt);
    });

    var page = this._state.page;
    this._firstBtn.setAttribute('aria-label', this._t('firstPage'));
    this._prevBtn.setAttribute('aria-label', this._t('previous'));
    this._nextBtn.setAttribute('aria-label', this._t('next'));
    this._lastBtn.setAttribute('aria-label', this._t('lastPage'));
    this._firstBtn.disabled = page <= 1;
    this._prevBtn.disabled = page <= 1;
    this._nextBtn.disabled = page >= pageCount;
    this._lastBtn.disabled = page >= pageCount;

    var showNumbers = pageCount > 1 && pageCount <= 200;
    this._firstBtn.hidden = pageCount <= 2;
    this._lastBtn.hidden = pageCount <= 2;

    this._pageNumbers.textContent = '';
    if (showNumbers) {
      this._pageIndicator.hidden = true;
      this._renderPageNumbers(page, pageCount);
    } else {
      this._pageIndicator.hidden = false;
      this._pageIndicator.textContent = this._t('pageOf', { page: page, pages: pageCount });
    }
  };

  NeikiTable.prototype._buildPageList = function (current, total) {
    var delta = 1;
    var pages = [];
    var last = 0;
    for (var i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
        if (last && i - last > 1) pages.push('…');
        pages.push(i);
        last = i;
      }
    }
    return pages;
  };

  NeikiTable.prototype._renderPageNumbers = function (current, total) {
    var self = this;
    this._buildPageList(current, total).forEach(function (entry) {
      if (entry === '…') {
        var gap = document.createElement('span');
        gap.className = 'ntbl-page-ellipsis';
        gap.textContent = '…';
        self._pageNumbers.appendChild(gap);
        return;
      }
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'ntbl-page-btn';
      btn.setAttribute('part', 'button');
      btn.textContent = String(entry);
      btn.setAttribute('aria-label', self._t('gotoPage', { page: entry }));
      if (entry === current) {
        btn.classList.add('ntbl-page-current');
        btn.setAttribute('aria-current', 'page');
      } else {
        btn.addEventListener('click', function () { self.goToPage(entry); });
      }
      self._pageNumbers.appendChild(btn);
    });
  };

  NeikiTable.prototype._emit = function (name, detail) {
    this.dispatchEvent(new CustomEvent('neiki-table:' + name, {
      detail: detail,
      bubbles: true,
      composed: true
    }));
  };

  // ---------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------

  NeikiTable.prototype.setColumns = function (columns) {
    this._columns = (columns || []).map(function (col) {
      return Object.assign({
        type: 'text',
        sortable: true,
        filterable: true,
        editable: true
      }, col, {
        type: oneOf(col.type, VALID_TYPES, 'text')
      });
    });
    this._state.columnWidths = {};
    if (this.isConnected) this._render();
    return this;
  };

  NeikiTable.prototype.getColumns = function () {
    return this._columns.map(function (col) { return Object.assign({}, col); });
  };

  NeikiTable.prototype.setData = function (rows) {
    this._rows = Array.isArray(rows) ? rows.slice() : [];
    this._state.selected = {};
    this._state.page = 1;
    if (this.isConnected) this._render();
    return this;
  };

  NeikiTable.prototype.getData = function () {
    return this._rows.map(function (row) { return Object.assign({}, row); });
  };

  NeikiTable.prototype.setLocale = function (locale) {
    this._config.locale = locale;
    if (this.isConnected) this._render();
    return this;
  };

  NeikiTable.prototype.getLocale = function () {
    return this._config.locale;
  };

  NeikiTable.prototype.addTranslations = function (locale, dictionary) {
    this._i18n[locale] = Object.assign({}, this._i18n[locale] || {}, dictionary || {});
    if (this.isConnected) this._render();
    return this;
  };

  NeikiTable.prototype.setConfig = function (config) {
    config = config || {};
    var cfg = this._config;
    if (config.locale !== undefined) cfg.locale = config.locale;
    if (config.theme !== undefined) cfg.theme = oneOf(config.theme, VALID_THEMES, cfg.theme);
    if (config.density !== undefined) cfg.density = oneOf(config.density, VALID_DENSITIES, cfg.density);
    if (config.rowKey !== undefined) cfg.rowKey = config.rowKey;
    if (config.searchable !== undefined) cfg.searchable = !!config.searchable;
    if (config.filterable !== undefined) cfg.filterable = !!config.filterable;
    if (config.selectable !== undefined) cfg.selectable = !!config.selectable;
    if (config.editable !== undefined) cfg.editable = !!config.editable;
    if (config.paginated !== undefined) cfg.paginated = !!config.paginated;
    if (config.exportable !== undefined) cfg.exportable = !!config.exportable;
    if (config.resizable !== undefined) cfg.resizable = !!config.resizable;
    if (config.loading !== undefined) cfg.loading = !!config.loading;
    if (config.searchDebounce !== undefined && config.searchDebounce >= 0) cfg.searchDebounce = config.searchDebounce;
    if (config.pageSize !== undefined) cfg.pageSize = config.pageSize;
    if (this.isConnected) this._render();
    return this;
  };

  NeikiTable.prototype.getConfig = function () {
    return Object.assign({}, this._config);
  };

  NeikiTable.prototype.sortBy = function (key, dir) {
    this._state.sort.key = key || null;
    this._state.sort.dir = key ? oneOf(dir, ['asc', 'desc'], 'asc') : null;
    if (this.isConnected) this._render();
    this._emit('sort', { key: this._state.sort.key, dir: this._state.sort.dir });
    return this;
  };

  NeikiTable.prototype.search = function (query) {
    this._state.search = query || '';
    this._state.page = 1;
    if (this.isConnected) this._render();
    this._emit('search', { query: this._state.search });
    return this;
  };

  NeikiTable.prototype.setFilter = function (key, value) {
    if (value === undefined || value === null || value === '') delete this._state.filters[key];
    else this._state.filters[key] = value;
    this._state.page = 1;
    if (this.isConnected) this._render();
    this._emit('filter', { filters: Object.assign({}, this._state.filters) });
    return this;
  };

  NeikiTable.prototype.clearFilters = function () {
    this._state.filters = {};
    this._state.search = '';
    this._state.page = 1;
    if (this.isConnected) this._render();
    this._emit('filter', { filters: {} });
    return this;
  };

  NeikiTable.prototype.goToPage = function (page) {
    this._state.page = Math.max(1, page);
    if (this.isConnected) this._render();
    this._emit('page-change', { page: this._state.page });
    return this;
  };

  NeikiTable.prototype.setPageSize = function (size) {
    this._config.pageSize = size;
    this._state.page = 1;
    if (this.isConnected) this._render();
    this._emit('page-change', { page: this._state.page, pageSize: size });
    return this;
  };

  NeikiTable.prototype.selectRow = function (rowKey, selected) {
    if (selected) this._state.selected[rowKey] = true;
    else delete this._state.selected[rowKey];
    if (this.isConnected) this._render();
    this._emit('select', { selected: this.getSelectedKeys() });
    return this;
  };

  NeikiTable.prototype.selectAll = function (selected) {
    var self = this;
    var view = this._computeView();
    if (selected) {
      view.forEach(function (row, i) { self._state.selected[self._rowKeyValue(row, i)] = true; });
    } else {
      view.forEach(function (row, i) { delete self._state.selected[self._rowKeyValue(row, i)]; });
    }
    if (this.isConnected) this._render();
    this._emit('select', { selected: this.getSelectedKeys() });
    return this;
  };

  NeikiTable.prototype.clearSelection = function () {
    this._state.selected = {};
    if (this.isConnected) this._render();
    this._emit('select', { selected: [] });
    return this;
  };

  NeikiTable.prototype.getSelectedKeys = function () {
    var selected = this._state.selected;
    return Object.keys(selected).filter(function (key) { return selected[key]; });
  };

  NeikiTable.prototype.getSelectedRows = function () {
    var self = this;
    var keys = this.getSelectedKeys();
    return this._rows.filter(function (row, i) {
      return keys.indexOf(String(self._rowKeyValue(row, i))) !== -1;
    }).map(function (row) { return Object.assign({}, row); });
  };

  NeikiTable.prototype._exportRows = function () {
    var selected = this.getSelectedKeys();
    if (selected.length > 0) return this.getSelectedRows();
    return this._computeView();
  };

  NeikiTable.prototype._buildCSV = function () {
    var self = this;
    var rows = this._exportRows();
    var headers = this._columns.map(function (col) { return col.label || col.key; });
    var lines = [headers.map(csvEscape).join(',')];
    rows.forEach(function (row) {
      var line = self._columns.map(function (col) {
        return csvEscape(self._cellText(row, col));
      }).join(',');
      lines.push(line);
    });
    return { text: lines.join('\r\n'), count: rows.length };
  };

  NeikiTable.prototype.exportCSV = function (filename) {
    var csv = this._buildCSV();
    downloadBlob(csv.text, 'text/csv;charset=utf-8', filename || 'neiki-table-export.csv');
    this._emit('export', { format: 'csv', count: csv.count });
    return this;
  };

  NeikiTable.prototype.copyCSV = function () {
    var self = this;
    var csv = this._buildCSV();
    var done = function (ok) {
      self._emit('copy', { format: 'csv', count: csv.count, ok: ok });
      if (!ok || !self._copyBtn) return;
      if (self._copyResetTimer) clearTimeout(self._copyResetTimer);
      self._copyBtn.textContent = self._t('copied');
      self._copyResetTimer = setTimeout(function () {
        self._copyResetTimer = null;
        if (self._copyBtn) self._copyBtn.textContent = self._t('copy');
      }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(csv.text).then(function () { done(true); }, function () { done(self._fallbackCopy(csv.text)); });
    } else {
      done(this._fallbackCopy(csv.text));
    }
    return this;
  };

  NeikiTable.prototype._fallbackCopy = function (text) {
    try {
      var area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.left = '-9999px';
      document.body.appendChild(area);
      area.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(area);
      return ok;
    } catch (err) {
      return false;
    }
  };

  NeikiTable.prototype.setLoading = function (loading) {
    this._config.loading = !!loading;
    if (loading) this.setAttribute('loading', '');
    else this.removeAttribute('loading');
    if (this.isConnected) this._render();
    return this;
  };

  NeikiTable.prototype.setDensity = function (density) {
    this._config.density = oneOf(density, VALID_DENSITIES, this._config.density);
    if (this.isConnected) this._render();
    return this;
  };

  NeikiTable.prototype.exportJSON = function (filename) {
    var self = this;
    var rows = this._exportRows();
    var payload = rows.map(function (row) {
      var out = {};
      self._columns.forEach(function (col) { out[col.key] = getValue(row, col.key); });
      return out;
    });
    downloadBlob(JSON.stringify(payload, null, 2), 'application/json;charset=utf-8', filename || 'neiki-table-export.json');
    this._emit('export', { format: 'json', count: rows.length });
    return this;
  };

  NeikiTable.prototype.refresh = function () {
    if (this.isConnected) this._render();
    return this;
  };

  customElements.define('neiki-table', NeikiTable);
})();
