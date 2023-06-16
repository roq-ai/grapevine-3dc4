const mapping: Record<string, string> = {
  'lead-opportunities': 'lead_opportunity',
  'online-communities': 'online_community',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
