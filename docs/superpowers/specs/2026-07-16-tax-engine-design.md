# Tax Engine Design

## Goal

Build a deterministic Bun + TypeScript calculation core that can act as a reference answer for four China mainland payroll-tax prompt tests:

- regular monthly salary continuity under cumulative withholding;
- year-end bonus separate taxation and true discontinuities;
- month-by-month cumulative withholding cash flow;
- social-insurance and housing-fund lower/upper base effects.

## Architecture

- `src/tax/income-tax.ts` contains pure functions for progressive annual comprehensive income tax, cumulative monthly withholding, and separate year-end bonus tax.
- `src/social/security.ts` contains pure functions for clamping contribution bases and computing employee-side social-insurance plus housing-fund deductions.
- `src/data/cities.ts` stores explicit city policy snapshots. Values are tagged by effective period and source label so stale data is visible instead of hidden.
- `src/scenarios.ts` assembles the four prompt-test scenarios into reproducible outputs.
- `src/cli.ts` prints concise numeric examples for manual review.

## Rules

- The calculation layer is deterministic and does not fetch live data at runtime.
- City policy data must carry an effective period.
- Tests cover the hard edges first: `36000` vs `36001` year-end bonus, cumulative withholding month transitions, and social-security base clamping.
- Monetary output is rounded to cents only at public API boundaries.

## Testing

Use `bun:test` for behavior tests. The first test suite locks down:

- year-end bonus tax jumps by `2309.10` yuan when moving from `36000` to `36001`;
- monthly salary tax is continuous at annual tax brackets but the marginal rate changes;
- a Shanghai `45000` salary clamps employee deductions at the policy upper base;
- low salary below the social-security floor uses the lower contribution base.
