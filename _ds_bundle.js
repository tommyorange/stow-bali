/* @ds-bundle: {"format":4,"namespace":"STOWSelfStorageDesignSystem_6ffa12","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Table","sourcePath":"components/core/Table.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"4faef8e22331","components/core/Card.jsx":"eb77e03f57a8","components/core/Stat.jsx":"7a57f59eb192","components/core/Table.jsx":"3ef856421ff5","components/feedback/Accordion.jsx":"5c7f7b5d7160","components/feedback/Modal.jsx":"de7d77144693","components/feedback/Toast.jsx":"8ebe304d2b82","components/forms/Button.jsx":"6c818243cd7b","components/forms/Checkbox.jsx":"5927f4ca39a9","components/forms/Input.jsx":"113135708503","components/forms/Select.jsx":"8d6ac1bcddc6","components/forms/Switch.jsx":"5672f7293be8","scraps/marketing-homepage-legacy/Website.jsx":"43f4c445a3c9","scraps/marketing-homepage-legacy/ds-base.js":"2fd82404df4c","ui_kits/app/AppScreens.jsx":"3564c58a159b","ui_kits/website/Header.jsx":"6d56a037ea94","ui_kits/website/Sections.jsx":"f4bf0759a9a6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.STOWSelfStorageDesignSystem_6ffa12 = window.STOWSelfStorageDesignSystem_6ffa12 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * STOW Badge — compact status / label pill. Uppercase label type.
 */
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  style = {}
}) {
  const tones = {
    neutral: {
      wash: 'var(--cream-200)',
      fg: 'var(--ink-700)',
      solidBg: 'var(--ink-800)',
      solidFg: 'var(--cream-100)'
    },
    brand: {
      wash: 'var(--indigo-050)',
      fg: 'var(--indigo-700)',
      solidBg: 'var(--indigo-500)',
      solidFg: 'var(--white)'
    },
    accent: {
      wash: 'var(--gold-300)',
      fg: 'var(--ink-900)',
      solidBg: 'var(--gold-500)',
      solidFg: 'var(--ink-900)'
    },
    success: {
      wash: 'var(--success-wash)',
      fg: 'var(--success)',
      solidBg: 'var(--success)',
      solidFg: 'var(--white)'
    },
    warning: {
      wash: 'var(--warning-wash)',
      fg: '#8A6400',
      solidBg: 'var(--warning)',
      solidFg: 'var(--ink-900)'
    },
    danger: {
      wash: 'var(--danger-wash)',
      fg: 'var(--danger)',
      solidBg: 'var(--danger)',
      solidFg: 'var(--white)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 10px',
      borderRadius: 8,
      background: solid ? t.solidBg : t.wash,
      color: solid ? t.solidFg : t.fg,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      lineHeight: 1,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * STOW Card — 14px radius, hairline border, cool shadow. The brand's base surface.
 * variant: default (white), brand (indigo), ink (dark), accent (gold edge).
 */
function Card({
  children,
  variant = 'default',
  interactive = false,
  padding = 24,
  style = {},
  ...rest
}) {
  const variants = {
    default: {
      background: 'var(--surface-card)',
      color: 'var(--ink-800)',
      border: '1px solid var(--border-soft)'
    },
    brand: {
      background: 'var(--indigo-500)',
      color: 'var(--white)',
      border: '1px solid var(--indigo-500)'
    },
    ink: {
      background: 'var(--ink-800)',
      color: 'var(--cream-100)',
      border: '1px solid var(--ink-700)'
    },
    accent: {
      background: 'var(--surface-card)',
      color: 'var(--ink-800)',
      border: '1px solid var(--border-soft)',
      borderTop: '4px solid var(--gold-500)'
    }
  };
  const v = variants[variant] || variants.default;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: 'var(--radius)',
      padding,
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease)',
      cursor: interactive ? 'pointer' : 'default',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
/**
 * STOW Stat — big expanded display number with an uppercase label.
 * The brand's signature confident data treatment.
 */
function Stat({
  value,
  label,
  sub = null,
  tone = 'ink',
  align = 'left',
  style = {}
}) {
  const colors = {
    ink: 'var(--ink-900)',
    indigo: 'var(--indigo-500)',
    onDark: 'var(--cream-100)',
    onIndigo: 'var(--white)'
  };
  const labelColor = tone === 'onDark' ? 'var(--cream-300)' : tone === 'onIndigo' ? 'var(--indigo-100)' : 'var(--ink-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      lineHeight: 0.92,
      fontSize: 'clamp(40px, 5vw, 64px)',
      color: colors[tone] || colors.ink
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: labelColor,
      textTransform: 'none',
      letterSpacing: 0,
      fontWeight: 500
    }
  }, sub));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Table.jsx
try { (() => {
/**
 * STOW Table — hairline cream rules, uppercase tracked header labels,
 * white surface. For pricing, invoices, inventory — business-facing data.
 */
function Table({
  columns = [],
  rows = [],
  keyField = null,
  dense = false,
  striped = false,
  style = {}
}) {
  const padY = dense ? 10 : 16;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: `12px 18px`,
      fontWeight: 600,
      fontSize: 11.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)',
      borderBottom: '1px solid var(--border)',
      whiteSpace: 'nowrap',
      width: c.width || 'auto',
      background: 'var(--cream-050)'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: keyField ? row[keyField] : i,
    style: {
      background: striped && i % 2 === 1 ? 'var(--cream-050)' : 'transparent'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--cream-050)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = striped && i % 2 === 1 ? 'var(--cream-050)' : 'transparent';
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: `${padY}px 18px`,
      fontSize: 14.5,
      fontWeight: c.strong ? 600 : 400,
      color: c.strong ? 'var(--ink-900)' : 'var(--ink-600)',
      borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-soft)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, c.render ? c.render(row) : row[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
/**
 * STOW Accordion — FAQ-style disclosure. Hairline rows, indigo active marker.
 */
function Accordion({
  items = [],
  defaultOpen = 0,
  style = {}
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)',
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '22px 4px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontStretch: '100%',
        letterSpacing: '-0.015em',
        fontSize: 19,
        color: 'var(--ink-900)'
      }
    }, it.q, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: 28,
        height: 28,
        borderRadius: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isOpen ? 'var(--indigo-500)' : 'var(--cream-200)',
        color: isOpen ? '#fff' : 'var(--ink-700)',
        transition: 'background var(--dur) var(--ease)',
        fontSize: 20,
        lineHeight: 1
      }
    }, isOpen ? '–' : '+')), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height var(--dur-slow) var(--ease)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 4px 24px',
        maxWidth: '60ch',
        fontFamily: 'var(--font-sans)',
        fontSize: 16,
        lineHeight: 1.55,
        color: 'var(--ink-600)'
      }
    }, it.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/**
 * STOW Modal — dimmed ink overlay with slight blur, white panel at
 * radius-lg, uppercase-label header, footer action row. Closes on
 * overlay click and Escape.
 */
function Modal({
  open = false,
  onClose = () => {},
  title = null,
  eyebrow = null,
  footer = null,
  width = 520,
  children,
  style = {}
}) {
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(13,14,19,0.55)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      animation: 'stowModalFade var(--dur-fast) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes stowModalFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes stowModalUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
      `), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      width: '100%',
      maxWidth: width,
      maxHeight: '86vh',
      display: 'flex',
      flexDirection: 'column',
      animation: 'stowModalUp var(--dur) var(--ease)',
      ...style
    }
  }, (title || eyebrow) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 28px 0',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--gold-600)',
      margin: '0 0 8px'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      fontSize: 24,
      lineHeight: 1.15,
      color: 'var(--ink-900)',
      margin: 0
    }
  }, title)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      flexShrink: 0,
      width: 36,
      height: 36,
      borderRadius: 10,
      border: 'none',
      background: 'var(--cream-100)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 28px 26px',
      overflowY: 'auto',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--ink-600)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 28px 24px',
      borderTop: '1px solid var(--border-soft)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/**
 * STOW Toast — compact notice card. Tones: default (ink), success,
 * warning, danger, brand (indigo). Presentational: the consumer
 * positions it (usually fixed bottom-right) and manages dismissal.
 */
function Toast({
  tone = 'default',
  title = null,
  description = null,
  action = null,
  onDismiss = null,
  icon = null,
  style = {}
}) {
  const tones = {
    default: {
      bar: 'var(--ink-800)',
      fg: 'var(--ink-900)'
    },
    brand: {
      bar: 'var(--indigo-500)',
      fg: 'var(--indigo-500)'
    },
    success: {
      bar: 'var(--success)',
      fg: 'var(--success)'
    },
    warning: {
      bar: 'var(--warning)',
      fg: 'var(--warning)'
    },
    danger: {
      bar: 'var(--danger)',
      fg: 'var(--danger)'
    }
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      background: 'var(--white)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow-md)',
      padding: '14px 16px',
      minWidth: 280,
      maxWidth: 420,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 4,
      alignSelf: 'stretch',
      borderRadius: 2,
      background: t.bar
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      display: 'flex',
      color: t.fg,
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--ink-900)',
      lineHeight: 1.35
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 400,
      fontSize: 13.5,
      color: 'var(--ink-500)',
      lineHeight: 1.45,
      marginTop: title ? 3 : 0
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      flexShrink: 0,
      width: 26,
      height: 26,
      borderRadius: 8,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--ink-400)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * STOW Button — confident, 14px radius, label-style text.
 * Variants: primary (indigo), secondary (ink outline), ghost, gold, inverse.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 16px',
      height: 38,
      fontSize: 12,
      gap: 8
    },
    md: {
      padding: '0 22px',
      height: 48,
      fontSize: 13,
      gap: 10
    },
    lg: {
      padding: '0 30px',
      height: 58,
      fontSize: 14,
      gap: 12
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--action-primary)',
      color: 'var(--text-on-indigo)',
      border: '2px solid var(--action-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ink-900)',
      border: '2px solid var(--ink-800)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-800)',
      border: '2px solid transparent'
    },
    gold: {
      background: 'var(--gold-500)',
      color: 'var(--text-on-gold)',
      border: '2px solid var(--gold-500)'
    },
    inverse: {
      background: 'var(--cream-100)',
      color: 'var(--ink-900)',
      border: '2px solid var(--cream-100)'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: s.fontSize,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      lineHeight: 1,
      borderRadius: 'var(--radius)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--dur) var(--ease), transform var(--dur-fast) var(--ease), border-color var(--dur) var(--ease)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * STOW Checkbox — square (matches the brand's geometric S-mark), indigo when checked.
 */
function Checkbox({
  checked = false,
  onChange = () => {},
  disabled = false,
  label = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": checked,
    onClick: () => !disabled && onChange(!checked),
    style: {
      width: 24,
      height: 24,
      borderRadius: 7,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--indigo-500)' : 'var(--white)',
      border: `2px solid ${checked ? 'var(--indigo-500)' : 'var(--border)'}`,
      transition: 'background var(--dur) var(--ease), border-color var(--dur) var(--ease)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--ink-800)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * STOW Input — cream-on-white field, 14px radius, indigo focus ring.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  prefix = null,
  suffix = null,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `stow-input-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--indigo-500)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-700)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--white)',
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius)',
      padding: '0 16px',
      height: 52,
      boxShadow: focus ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-400)',
      display: 'flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--ink-900)',
      height: '100%',
      minWidth: 0,
      ...style
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-400)',
      display: 'flex'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      color: error ? 'var(--danger)' : 'var(--ink-500)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * STOW Select — native select styled to match Input: white field,
 * 14px radius, 2px border, indigo focus ring, chevron in ink.
 */
function Select({
  label = null,
  hint = null,
  error = null,
  options = [],
  placeholder = null,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || `stow-select-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--indigo-500)' : 'var(--border)';
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-700)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--white)',
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius)',
      height: 52,
      boxShadow: focus ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--ink-900)',
      padding: '0 44px 0 16px',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    disabled: o.disabled
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ink-500)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 16,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      color: error ? 'var(--danger)' : 'var(--ink-500)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * STOW Switch — indigo when on, ink track when off. 14px-friendly pill.
 */
function Switch({
  checked = false,
  onChange = () => {},
  disabled = false,
  label = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange(!checked),
    style: {
      position: 'relative',
      width: 52,
      height: 30,
      borderRadius: 999,
      background: checked ? 'var(--indigo-500)' : 'var(--cream-300)',
      transition: 'background var(--dur) var(--ease)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 25 : 3,
      width: 24,
      height: 24,
      borderRadius: 999,
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur) var(--ease)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--ink-800)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// scraps/marketing-homepage-legacy/Website.jsx
try { (() => {
/* STOW marketing homepage — consolidated for the template (header, hero, size finder,
   how-it-works, FAQ, CTA band, footer, booking modal). Exports window.HomePage. */
const _DS = () => window.STOWSelfStorageDesignSystem_6ffa12 || {};
const _mk = n => props => React.createElement(_DS()[n], props);
const Button = _mk('Button'),
  Input = _mk('Input'),
  Badge = _mk('Badge'),
  Card = _mk('Card'),
  Stat = _mk('Stat'),
  Accordion = _mk('Accordion');

/* STOW S-mark — indigo tile, gold inset trim, three offset stacked bars. */
function SMark({
  size = 38
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 120 120",
    role: "img",
    "aria-label": "STOW"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "120",
    height: "120",
    rx: "16",
    fill: "var(--indigo-500)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "42",
    y: "31",
    width: "52",
    height: "15",
    rx: "7.5",
    fill: "var(--cream-100)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "26",
    y: "53",
    width: "68",
    height: "15",
    rx: "7.5",
    fill: "var(--gold-500)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "26",
    y: "75",
    width: "52",
    height: "15",
    rx: "7.5",
    fill: "var(--cream-100)"
  }));
}
const WORD = (color, dot) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontStretch: '112%',
    letterSpacing: '-0.03em',
    textTransform: 'uppercase',
    fontSize: 26,
    lineHeight: 1,
    color
  }
}, "Stow", /*#__PURE__*/React.createElement("span", {
  style: {
    color: dot
  }
}, "."));
function SiteHeader({
  onBook
}) {
  const link = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--ink-700)',
    textDecoration: 'none',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(243,238,225,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SMark, {
    size: 38
  }), WORD('var(--ink-900)', 'var(--gold-600)')), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 30,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Sizes"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Locations")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onBook
  }, "Reserve a unit"))));
}

/* Geometric "unit doors" motif — echoes the square S-mark */
function UnitGrid() {
  const cells = [{
    c: 'var(--indigo-500)'
  }, {
    c: 'var(--cream-200)'
  }, {
    c: 'var(--ink-800)'
  }, {
    c: 'var(--cream-200)'
  }, {
    c: 'var(--gold-500)'
  }, {
    c: 'var(--cream-200)'
  }, {
    c: 'var(--ink-800)'
  }, {
    c: 'var(--cream-200)'
  }, {
    c: 'var(--indigo-500)'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-800)',
      borderRadius: 28,
      padding: 22,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14
    }
  }, cells.map((cell, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '1',
      borderRadius: 14,
      background: cell.c,
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 4,
      borderRadius: 2,
      background: cell.c === 'var(--cream-200)' ? 'var(--ink-400)' : 'rgba(255,255,255,0.55)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 18,
      padding: '0 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--cream-300)'
    }
  }, "Canggu · Level 2"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "6 units left")));
}
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 32px 40px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Now open · Canggu & Seminyak"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      lineHeight: 0.92,
      fontSize: 'clamp(48px, 6vw, 84px)',
      color: 'var(--ink-900)',
      margin: '20px 0 0'
    }
  }, "Bali's storage,", /*#__PURE__*/React.createElement("br", null), "built for you", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 19,
      fontWeight: 500,
      lineHeight: 1.5,
      color: 'var(--ink-600)',
      maxWidth: '46ch',
      margin: '22px 0 0'
    }
  }, "Climate-controlled units, 24/7 app access, and no lock-in. Book online in two minutes and move in today."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onBook
  }, "Find your size"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "See pricing")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "24/7",
    label: "App access"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2 min",
    label: "To book"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "50+",
    label: "Unit sizes",
    tone: "indigo"
  }))), /*#__PURE__*/React.createElement(UnitGrid, null));
}
const SIZES = [{
  name: 'Locker',
  size: '1m²',
  use: 'Boxes, surfboard, a few bags',
  price: '450k',
  popular: false
}, {
  name: 'Studio',
  size: '4m²',
  use: 'Studio apartment of belongings',
  price: '1.2M',
  popular: true
}, {
  name: 'Villa',
  size: '9m²',
  use: '2–3 bedroom villa contents',
  price: '2.4M',
  popular: false
}, {
  name: 'Commercial',
  size: '20m²+',
  use: 'Stock, equipment, archives',
  price: 'POA',
  popular: false
}];
function SizeFinder({
  onBook
}) {
  const [active, setActive] = React.useState(1);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-050)',
      borderTop: '1px solid var(--border-soft)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--indigo-600)'
    }
  }, "Find your size"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      fontSize: 44,
      lineHeight: 0.96,
      color: 'var(--ink-900)',
      margin: '10px 0 8px'
    }
  }, "Pick a unit. Pay monthly."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      color: 'var(--ink-600)',
      margin: '0 0 36px'
    }
  }, "No deposit, no lock-in. Prices in IDR per month."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, SIZES.map((s, i) => {
    const on = active === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => setActive(i),
      style: {
        position: 'relative',
        cursor: 'pointer',
        borderRadius: 14,
        padding: 24,
        background: on ? 'var(--indigo-500)' : 'var(--white)',
        color: on ? '#fff' : 'var(--ink-800)',
        border: `2px solid ${on ? 'var(--indigo-500)' : 'var(--border)'}`,
        boxShadow: on ? 'var(--shadow-brand)' : 'var(--shadow-xs)',
        transform: on ? 'translateY(-4px)' : 'none',
        transition: 'all var(--dur) var(--ease)'
      }
    }, s.popular && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -11,
        left: 20
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      solid: true
    }, "Most popular")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: on ? 'var(--indigo-100)' : 'var(--ink-400)'
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontStretch: '112%',
        letterSpacing: '-0.03em',
        fontSize: 46,
        lineHeight: 1,
        margin: '8px 0 12px'
      }
    }, s.size), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        lineHeight: 1.45,
        color: on ? 'rgba(255,255,255,0.85)' : 'var(--ink-500)',
        margin: '0 0 20px',
        minHeight: 40
      }
    }, s.use), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontStretch: '112%',
        fontSize: 26,
        letterSpacing: '-0.02em'
      }
    }, "Rp ", s.price), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: on ? 'var(--indigo-100)' : 'var(--ink-400)'
      }
    }, s.price === 'POA' ? '' : '/mo')));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onBook
  }, "Reserve the ", SIZES[active].name, " →"))));
}
const STEPS = [{
  n: '01',
  t: 'Pick a size',
  d: 'Use the size finder or chat to us. Reserve online in two minutes.'
}, {
  n: '02',
  t: 'Move in today',
  d: 'Drive up to the door or use free van pickup on units 4m² and up.'
}, {
  n: '03',
  t: 'Access anytime',
  d: 'Unlock the gate and your unit from the STOW app, 24/7. No front desk.'
}];
function HowItWorks() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      fontSize: 56,
      lineHeight: 1,
      color: 'var(--indigo-500)'
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      fontSize: 24,
      color: 'var(--ink-900)',
      margin: '12px 0 8px'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--ink-600)',
      margin: 0,
      maxWidth: '34ch'
    }
  }, s.d)))));
}
const FAQS = [{
  q: 'How does 24/7 access work?',
  a: 'Your unit unlocks from the STOW app — tap to open the gate and your door. No front desk, no waiting, any hour.'
}, {
  q: 'Is there a minimum term?',
  a: 'No lock-in. Pay month to month and cancel any time with 7 days notice.'
}, {
  q: 'Is my stuff insured?',
  a: 'Basic cover is included on every unit. Top up to full replacement value at checkout in two taps.'
}, {
  q: 'Do you offer pickup?',
  a: 'Free van pickup is included on units 4m² and larger across Canggu, Seminyak and Ubud.'
}];
function FaqSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-050)',
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      fontSize: 40,
      lineHeight: 0.96,
      color: 'var(--ink-900)',
      margin: '0 0 28px'
    }
  }, "Questions, answered."), /*#__PURE__*/React.createElement(Accordion, {
    items: FAQS
  })));
}
function CtaBand({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      fontSize: 'clamp(34px,4vw,56px)',
      lineHeight: 0.94,
      color: 'var(--cream-100)',
      margin: 0
    }
  }, "Ready to clear", /*#__PURE__*/React.createElement("br", null), "the clutter", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: onBook
  }, "Reserve a unit"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: 'var(--cream-100)',
      border: '2px solid rgba(243,238,225,0.4)'
    }
  }, "Talk to us"))));
}
function SiteFooter() {
  const col = (title, links) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-400)',
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--ink-600)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, l))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--cream-100)',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px 32px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(SMark, {
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      fontSize: 22,
      color: 'var(--ink-900)'
    }
  }, "Stow", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)'
    }
  }, "."))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink-500)',
      maxWidth: '30ch',
      lineHeight: 1.5
    }
  }, "Self storage built for Bali's expats and businesses.")), col('Storage', ['Unit sizes', 'Pricing', 'Locations', 'Business']), col('Company', ['About', 'Careers', 'Contact', 'Blog']), col('Legal', ['Terms', 'Privacy', 'Insurance'])), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '20px 32px',
      borderTop: '1px solid var(--border-soft)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "© 2026 STOW Self Storage Bali"), /*#__PURE__*/React.createElement("span", null, "Canggu · Seminyak · Ubud")));
}
function BookingModal({
  onClose
}) {
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 440,
      background: 'var(--white)',
      borderRadius: 20,
      padding: 32,
      boxShadow: 'var(--shadow-lg)'
    }
  }, !done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Reserve · free to hold"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      fontSize: 30,
      lineHeight: 0.98,
      color: 'var(--ink-900)',
      margin: '16px 0 20px'
    }
  }, "Hold your unit"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jordan Rivers"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Move-in date",
    placeholder: "Today"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: () => setDone(true)
  }, "Confirm reservation"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '12px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 16,
      background: 'var(--gold-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#15171E",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      fontSize: 28,
      color: 'var(--ink-900)',
      margin: '0 0 8px'
    }
  }, "Unit held", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--ink-600)',
      margin: '0 0 24px'
    }
  }, "We've emailed your reservation. Move in any time in the next 7 days."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: true,
    onClick: onClose
  }, "Done"))));
}
function HomePage() {
  const [booking, setBooking] = React.useState(false);
  const open = () => setBooking(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    onBook: open
  }), /*#__PURE__*/React.createElement(Hero, {
    onBook: open
  }), /*#__PURE__*/React.createElement(SizeFinder, {
    onBook: open
  }), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(FaqSection, null), /*#__PURE__*/React.createElement(CtaBand, {
    onBook: open
  }), /*#__PURE__*/React.createElement(SiteFooter, null), booking && /*#__PURE__*/React.createElement(BookingModal, {
    onClose: () => setBooking(false)
  }));
}

/* Gate: mount only once the DS bundle has loaded, so DS components are never
   undefined at first render (avoids a load-order race in consuming projects). */
function HomePageGate() {
  const [ready, setReady] = React.useState(!!window.STOWSelfStorageDesignSystem_6ffa12);
  React.useEffect(() => {
    if (ready) return;
    const id = setInterval(() => {
      if (window.STOWSelfStorageDesignSystem_6ffa12) {
        clearInterval(id);
        setReady(true);
      }
    }, 30);
    return () => clearInterval(id);
  }, [ready]);
  if (!ready) return null;
  return React.createElement(HomePage);
}
Object.assign(window, {
  HomePage: HomePageGate
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "scraps/marketing-homepage-legacy/Website.jsx", error: String((e && e.message) || e) }); }

// scraps/marketing-homepage-legacy/ds-base.js
try { (() => {
// Loads this design system into the template. In a consuming project, point
// base at the bound DS folder relative to this file (e.g. '_ds/<folder>' at
// the project root, '../_ds/<folder>' one level down) — one line to edit.
(() => {
  const base = '../..';
  for (const p of ["tokens/fonts.css", "tokens/colors.css", "tokens/typography.css", "tokens/spacing.css", "tokens/radius.css", "tokens/motion.css", "styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line in ds-base.js at the bound _ds/<folder> tree relative to this page (e.g. _ds/<folder> at the project root, ../_ds/<folder> one level down); in a fresh design system this can just mean the bundle is not compiled yet');
  document.head.appendChild(s);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "scraps/marketing-homepage-legacy/ds-base.js", error: String((e && e.message) || e) }); }

// ui_kits/app/AppScreens.jsx
try { (() => {
/* STOW customer app — screens for the phone shell. */
const {
  Button: AB,
  Badge: ABdg,
  Card: AC,
  Stat: AStat,
  Switch: ASwitch
} = window.STOWSelfStorageDesignSystem_6ffa12;
const label = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  fontSize: 11,
  letterSpacing: '0.16em',
  textTransform: 'uppercase'
};
const display = size => ({
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontStretch: '112%',
  letterSpacing: '-0.03em',
  textTransform: 'uppercase',
  lineHeight: 0.96,
  fontSize: size
});
function TopBar({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...display(26),
      color: 'var(--ink-900)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      background: 'var(--cream-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      color: 'var(--ink-700)',
      fontSize: 15
    }
  }, "JR"));
}
function AccessScreen() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      const t = setTimeout(() => setOpen(false), 2600);
      return () => clearTimeout(t);
    }
  }, [open]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Access"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 22px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      padding: 26,
      background: open ? 'var(--indigo-700)' : 'var(--indigo-500)',
      border: open ? '2px solid var(--gold-500)' : '2px solid transparent',
      transition: 'background var(--dur-slow) var(--ease), border-color var(--dur-slow) var(--ease)',
      boxShadow: 'var(--shadow-brand)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...label,
      color: open ? 'var(--gold-300)' : 'var(--indigo-100)'
    }
  }, "Canggu · Level 2"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...display(40),
      color: '#fff',
      margin: '6px 0 4px'
    }
  }, "Unit C-214", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'rgba(243,238,225,0.82)',
      margin: 0
    }
  }, open ? 'Door unlocked — opens for 30s' : '4m² Studio · climate-controlled'), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(true),
    style: {
      marginTop: 22,
      width: '100%',
      height: 64,
      borderRadius: 16,
      border: 'none',
      cursor: 'pointer',
      background: open ? 'var(--ink-900)' : 'var(--white)',
      color: open ? 'var(--gold-500)' : 'var(--indigo-600)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      transition: 'all var(--dur) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, open ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 9.9-1"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  }))), open ? 'Unlocked' : 'Hold to unlock')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(AC, {
    padding: 18
  }, /*#__PURE__*/React.createElement(AStat, {
    value: "24/7",
    label: "Access"
  })), /*#__PURE__*/React.createElement(AC, {
    padding: 18
  }, /*#__PURE__*/React.createElement(AStat, {
    value: "C-214",
    label: "Your unit",
    tone: "indigo"
  })))));
}
function HomeScreen({
  go
}) {
  const items = [{
    t: 'Surfboards (x2)',
    m: 'Added 12 Jun'
  }, {
    t: 'Winter clothes',
    m: 'Box · 4 of 6'
  }, {
    t: 'Office archives',
    m: 'Box · 6 of 6'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Hi, Jordan"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 22px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => go('access'),
    style: {
      cursor: 'pointer',
      borderRadius: 20,
      padding: 22,
      background: 'var(--ink-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...label,
      color: 'var(--cream-300)'
    }
  }, "Active unit"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...display(30),
      color: 'var(--cream-100)',
      margin: '6px 0 2px'
    }
  }, "C-214", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, ".")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--cream-300)'
    }
  }, "Tap to unlock →")), /*#__PURE__*/React.createElement(ABdg, {
    tone: "accent",
    solid: true
  }, "Open")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...label,
      color: 'var(--ink-400)',
      margin: '26px 0 14px'
    }
  }, "In your unit"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--white)',
      border: '1px solid var(--border-soft)',
      borderRadius: 14,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'var(--indigo-050)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--ink-900)'
    }
  }, it.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-400)'
    }
  }, it.m)))))));
}
function BillingScreen() {
  const [insure, setInsure] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Billing"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 22px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      padding: 24,
      background: 'var(--indigo-500)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...label,
      color: 'var(--indigo-100)'
    }
  }, "Next payment · 1 Jul"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...display(44),
      margin: '8px 0 0'
    }
  }, "Rp 1.32M"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'rgba(255,255,255,0.85)',
      margin: '4px 0 18px'
    }
  }, "Studio 4m² + insurance"), /*#__PURE__*/React.createElement(AB, {
    variant: "inverse",
    size: "md",
    block: true
  }, "Manage payment")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-soft)',
      borderRadius: 14,
      padding: '18px 18px',
      marginTop: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--ink-900)'
    }
  }, "Full-value insurance"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-400)'
    }
  }, "+ Rp 120k / mo")), /*#__PURE__*/React.createElement(ASwitch, {
    checked: insure,
    onChange: setInsure
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...label,
      color: 'var(--ink-400)',
      margin: '24px 0 12px'
    }
  }, "Recent"), ['1 Jun · Rp 1.32M', '1 May · Rp 1.32M', '1 Apr · Rp 1.20M'].map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 2px',
      borderBottom: '1px solid var(--border-soft)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink-600)'
    }
  }, /*#__PURE__*/React.createElement("span", null, r.split(' · ')[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, r.split(' · ')[1])))));
}
function TabBar({
  tab,
  go
}) {
  const tabs = [{
    id: 'home',
    label: 'Home',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 9.5 12 3l9 6.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 10v10h14V10"
    }))
  }, {
    id: 'access',
    label: 'Access',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 11V7a5 5 0 0 1 10 0v4"
    }))
  }, {
    id: 'billing',
    label: 'Billing',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "5",
      width: "20",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 10h20"
    }))
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--border)',
      background: 'var(--white)',
      padding: '10px 0 18px'
    }
  }, tabs.map(t => {
    const on = tab === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => go(t.id),
      style: {
        flex: 1,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        color: on ? 'var(--indigo-500)' : 'var(--ink-400)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "23",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, t.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 10,
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }
    }, t.label));
  }));
}
function StowApp() {
  const [tab, setTab] = React.useState('home');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, tab === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    go: setTab
  }), tab === 'access' && /*#__PURE__*/React.createElement(AccessScreen, null), tab === 'billing' && /*#__PURE__*/React.createElement(BillingScreen, null)), /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    go: setTab
  }));
}
Object.assign(window, {
  StowApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* STOW marketing website — section parts. Exported to window for HomePage.jsx. */
const {
  Button,
  Badge,
  Card,
  Stat,
  Accordion
} = window.STOWSelfStorageDesignSystem_6ffa12;

/* STOW S-mark — indigo tile, gold inset trim, three offset stacked bars (top/bottom cream, middle gold). */
function SMark({
  size = 38
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 120 120",
    role: "img",
    "aria-label": "STOW"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "120",
    height: "120",
    rx: "16",
    fill: "var(--indigo-500)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "42",
    y: "31",
    width: "52",
    height: "15",
    rx: "7.5",
    fill: "var(--cream-100)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "26",
    y: "53",
    width: "68",
    height: "15",
    rx: "7.5",
    fill: "var(--gold-500)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "26",
    y: "75",
    width: "52",
    height: "15",
    rx: "7.5",
    fill: "var(--cream-100)"
  }));
}
const WORD = (color, dot) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontStretch: '112%',
    letterSpacing: '-0.03em',
    textTransform: 'uppercase',
    fontSize: 26,
    lineHeight: 1,
    color
  }
}, "Stow", /*#__PURE__*/React.createElement("span", {
  style: {
    color: dot
  }
}, "."));
function SiteHeader({
  onBook
}) {
  const link = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--ink-700)',
    textDecoration: 'none',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(243,238,225,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SMark, {
    size: 38
  }), WORD('var(--ink-900)', 'var(--gold-600)')), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 30,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Sizes"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Locations")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onBook
  }, "Reserve a unit"))));
}
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 32px 40px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Now open · Canggu & Seminyak"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      lineHeight: 0.92,
      fontSize: 'clamp(48px, 6vw, 84px)',
      color: 'var(--ink-900)',
      margin: '20px 0 0'
    }
  }, "Bali's storage,", /*#__PURE__*/React.createElement("br", null), "built for you", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 19,
      fontWeight: 500,
      lineHeight: 1.5,
      color: 'var(--ink-600)',
      maxWidth: '46ch',
      margin: '22px 0 0'
    }
  }, "Climate-controlled units, 24/7 app access, and no lock-in. Book online in two minutes and move in today."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onBook
  }, "Find your size"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "See pricing")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "24/7",
    label: "App access"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2 min",
    label: "To book"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "50+",
    label: "Unit sizes",
    tone: "indigo"
  }))), /*#__PURE__*/React.createElement(UnitGrid, null));
}

/* Geometric "unit doors" motif — echoes the square S-mark */
function UnitGrid() {
  const cells = [{
    c: 'var(--indigo-500)',
    t: ''
  }, {
    c: 'var(--cream-200)',
    t: ''
  }, {
    c: 'var(--ink-800)',
    t: ''
  }, {
    c: 'var(--cream-200)',
    t: ''
  }, {
    c: 'var(--gold-500)',
    t: ''
  }, {
    c: 'var(--cream-200)',
    t: ''
  }, {
    c: 'var(--ink-800)',
    t: ''
  }, {
    c: 'var(--cream-200)',
    t: ''
  }, {
    c: 'var(--indigo-500)',
    t: ''
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-800)',
      borderRadius: 28,
      padding: 22,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14
    }
  }, cells.map((cell, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '1',
      borderRadius: 14,
      background: cell.c,
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 4,
      borderRadius: 2,
      background: cell.c === 'var(--cream-200)' ? 'var(--ink-400)' : 'rgba(255,255,255,0.55)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 18,
      padding: '0 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--cream-300)'
    }
  }, "Canggu · Level 2"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "6 units left")));
}
Object.assign(window, {
  SiteHeader,
  Hero,
  UnitGrid,
  SMark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* STOW website — size finder, how-it-works, FAQ, footer. */
const {
  Button: B2,
  Badge: Bdg2,
  Card: C2,
  Accordion: Acc2
} = window.STOWSelfStorageDesignSystem_6ffa12;
const SIZES = [{
  name: 'Locker',
  size: '1m²',
  use: 'Boxes, surfboard, a few bags',
  price: '450k',
  popular: false
}, {
  name: 'Studio',
  size: '4m²',
  use: 'Studio apartment of belongings',
  price: '1.2M',
  popular: true
}, {
  name: 'Villa',
  size: '9m²',
  use: '2–3 bedroom villa contents',
  price: '2.4M',
  popular: false
}, {
  name: 'Commercial',
  size: '20m²+',
  use: 'Stock, equipment, archives',
  price: 'POA',
  popular: false
}];
function SizeFinder({
  onBook
}) {
  const [active, setActive] = React.useState(1);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-050)',
      borderTop: '1px solid var(--border-soft)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--indigo-600)'
    }
  }, "Find your size"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      fontSize: 44,
      lineHeight: 0.96,
      color: 'var(--ink-900)',
      margin: '10px 0 8px'
    }
  }, "Pick a unit. Pay monthly."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      color: 'var(--ink-600)',
      margin: '0 0 36px'
    }
  }, "No deposit, no lock-in. Prices in IDR per month."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, SIZES.map((s, i) => {
    const on = active === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => setActive(i),
      style: {
        position: 'relative',
        cursor: 'pointer',
        borderRadius: 14,
        padding: 24,
        background: on ? 'var(--indigo-500)' : 'var(--white)',
        color: on ? '#fff' : 'var(--ink-800)',
        border: `2px solid ${on ? 'var(--indigo-500)' : 'var(--border)'}`,
        boxShadow: on ? 'var(--shadow-brand)' : 'var(--shadow-xs)',
        transform: on ? 'translateY(-4px)' : 'none',
        transition: 'all var(--dur) var(--ease)'
      }
    }, s.popular && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -11,
        left: 20
      }
    }, /*#__PURE__*/React.createElement(Bdg2, {
      tone: "accent",
      solid: true
    }, "Most popular")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: on ? 'var(--indigo-100)' : 'var(--ink-400)'
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontStretch: '112%',
        letterSpacing: '-0.03em',
        fontSize: 46,
        lineHeight: 1,
        margin: '8px 0 12px'
      }
    }, s.size), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        lineHeight: 1.45,
        color: on ? 'rgba(255,255,255,0.85)' : 'var(--ink-500)',
        margin: '0 0 20px',
        minHeight: 40
      }
    }, s.use), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontStretch: '112%',
        fontSize: 26,
        letterSpacing: '-0.02em'
      }
    }, "Rp ", s.price), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: on ? 'var(--indigo-100)' : 'var(--ink-400)'
      }
    }, s.price === 'POA' ? '' : '/mo')));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onBook
  }, "Reserve the ", SIZES[active].name, " →"))));
}
const STEPS = [{
  n: '01',
  t: 'Pick a size',
  d: 'Use the size finder or chat to us. Reserve online in two minutes.'
}, {
  n: '02',
  t: 'Move in today',
  d: 'Drive up to the door or use free van pickup on units 4m² and up.'
}, {
  n: '03',
  t: 'Access anytime',
  d: 'Unlock the gate and your unit from the STOW app, 24/7. No front desk.'
}];
function HowItWorks() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      fontSize: 56,
      lineHeight: 1,
      color: 'var(--indigo-500)'
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      fontSize: 24,
      color: 'var(--ink-900)',
      margin: '12px 0 8px'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--ink-600)',
      margin: 0,
      maxWidth: '34ch'
    }
  }, s.d)))));
}
const FAQS = [{
  q: 'How does 24/7 access work?',
  a: 'Your unit unlocks from the STOW app — tap to open the gate and your door. No front desk, no waiting, any hour.'
}, {
  q: 'Is there a minimum term?',
  a: 'No lock-in. Pay month to month and cancel any time with 7 days notice.'
}, {
  q: 'Is my stuff insured?',
  a: 'Basic cover is included on every unit. Top up to full replacement value at checkout in two taps.'
}, {
  q: 'Do you offer pickup?',
  a: 'Free van pickup is included on units 4m² and larger across Canggu, Seminyak and Ubud.'
}];
function FaqSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-050)',
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      fontSize: 40,
      lineHeight: 0.96,
      color: 'var(--ink-900)',
      margin: '0 0 28px'
    }
  }, "Questions, answered."), /*#__PURE__*/React.createElement(Acc2, {
    items: FAQS
  })));
}
function CtaBand({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      fontSize: 'clamp(34px,4vw,56px)',
      lineHeight: 0.94,
      color: 'var(--cream-100)',
      margin: 0
    }
  }, "Ready to clear", /*#__PURE__*/React.createElement("br", null), "the clutter", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: onBook
  }, "Reserve a unit"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: 'var(--cream-100)',
      border: '2px solid rgba(243,238,225,0.4)'
    }
  }, "Talk to us"))));
}
function SiteFooter() {
  const col = (title, links) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-400)',
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--ink-600)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, l))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--cream-100)',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px 32px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 120 120",
    role: "img",
    "aria-label": "STOW"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "120",
    height: "120",
    rx: "16",
    fill: "var(--indigo-500)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "42",
    y: "31",
    width: "52",
    height: "15",
    rx: "7.5",
    fill: "var(--cream-100)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "26",
    y: "53",
    width: "68",
    height: "15",
    rx: "7.5",
    fill: "var(--gold-500)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "26",
    y: "75",
    width: "52",
    height: "15",
    rx: "7.5",
    fill: "var(--cream-100)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '112%',
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      fontSize: 22,
      color: 'var(--ink-900)'
    }
  }, "Stow", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)'
    }
  }, "."))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink-500)',
      maxWidth: '30ch',
      lineHeight: 1.5
    }
  }, "Self storage built for Bali's expats and businesses.")), col('Storage', ['Unit sizes', 'Pricing', 'Locations', 'Business']), col('Company', ['About', 'Careers', 'Contact', 'Blog']), col('Legal', ['Terms', 'Privacy', 'Insurance'])), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '20px 32px',
      borderTop: '1px solid var(--border-soft)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "© 2026 STOW Self Storage Bali"), /*#__PURE__*/React.createElement("span", null, "Canggu · Seminyak · Ubud")));
}
Object.assign(window, {
  SizeFinder,
  HowItWorks,
  FaqSection,
  CtaBand,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
