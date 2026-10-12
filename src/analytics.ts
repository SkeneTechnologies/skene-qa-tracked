import posthog from 'posthog-js';

export function startAnalytics(key: string) {
  posthog.init(key, { api_host: 'https://eu.i.posthog.com' });
}

export function identifyMember(member: { id: string; email: string }) {
  posthog.identify(member.id, { email: member.email });
}
