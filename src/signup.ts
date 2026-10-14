import posthog from 'posthog-js';
import { identifyMember } from './analytics';

export async function completeSignup(member: { id: string; email: string }, plan: string) {
  const saved = await saveMember(member, plan);
  identifyMember(member);
  return saved;
}

async function saveMember(member: { id: string; email: string }, plan: string) {
  return { ...member, plan, createdAt: new Date().toISOString() };
}
