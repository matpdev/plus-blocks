import ReactGA from 'react-ga';
export function GAEvent(
  category: string,
  action: string,
  label: string,
  value: string | number = 1,
  interactive: boolean = true,
) {
  if (process.env.NODE_ENV !== 'production') return;
  if (!category || !action) return;
  ReactGA.ga('send', {
    hitType: 'event',
    eventCategory: category,
    eventAction: action,
    eventLabel: label,
    eventValue: value,
    nonInteractive: interactive,
  });
  console.info('Evento GA', { category, action, label, value });
}
export function GA4Event(name: string, data?: any) {
  if (process.env.NODE_ENV !== 'production') return;
  if (!name) return;
  ReactGA.event({
    //GTAG
    category: name,
    action: data,
  });
  console.info('Evento GA4', { name, data });
}
export function gaSessionRenew() {
  GAEvent('session', 'session_renew', 'Renovação de Sessão', 1);
  GA4Event('session_renew', {
    value: 1,
  });
}
export function virtualPageView(url: string) {
  if (process.env.NODE_ENV !== 'production') return;
  console.info('Virtual Page View', { url });
  const pageLocation = `${window.location.origin}${url}`;
  ReactGA.ga('set', 'page', url);
  ReactGA.ga('send', 'pageview');
  ReactGA.set({
    //gtag
    page_title: window.document.title,
    page_location: pageLocation,
  });
}
