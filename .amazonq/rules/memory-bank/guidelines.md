# Development Guidelines

## Code Quality Standards

### TypeScript Conventions

- Always use `strict: true` in tsconfig — all challenges enforce strict mode
- Prefer explicit return types on exported functions, especially when the return shape is non-trivial
- Use `type` for plain data shapes (e.g., `type Loan = { ... }`); use `interface` when extension/implementation is expected
- Use `as const` for constant objects and tuples to get literal types
- Target ES2020 — use optional chaining (`?.`), nullish coalescing (`??`), and modern array methods freely

### Naming Conventions

- Functions: `camelCase` — descriptive verbs (`evaluateLoan`, `calculateShipping`, `formatCurrency`)
- Types/Interfaces: `PascalCase` — noun-based (`Loan`, `UserProfile`, `CartItem`)
- Constants: `SCREAMING_SNAKE_CASE` — grouped semantically in objects (`SHIPPING_RATES`, `DISCOUNT_RATES`)
- Files: `camelCase` for backend (e.g., `loanEvaluator.ts`), `PascalCase` for React components (e.g., `UserCard.tsx`)

### Magic Numbers / Magic Strings

- No numeric or string literals in function bodies — extract to named constants at the top of the file
- Group related constants into objects: `const SHIPPING_RATES = { BASE_PER_KG: 2.75, ... } as const`
- Domain strings (e.g., membership levels, employment types) belong in constants or union types, not inline

### Function Design

- Keep cyclomatic complexity ≤ 4 per function
- Each function should do one thing — decompose "god functions" into focused helpers
- Use guard clauses / early returns instead of deeply nested if/else
- Business rules as functions: each rule returns `null` (pass) or a rejection reason string — the orchestrator just iterates them
- Pure functions preferred: no side effects, same input → same output

Example pattern (business rules decomposition):
```typescript
function checkAge(loan: Loan): string | null {
  return loan.applicantAge < 18 ? "Applicant must be at least 18" : null;
}

function checkDebtRatio(loan: Loan): string | null {
  return loan.existingDebt / loan.monthlyIncome > 0.5
    ? "Debt-to-income ratio too high"
    : null;
}

export function evaluateLoan(loan: Loan) {
  const rules = [checkAge, checkDebtRatio, ...];
  for (const rule of rules) {
    const reason = rule(loan);
    if (reason) return { approved: false, reason, rate: 0 };
  }
  return { approved: true, reason: "Approved", rate: computeRate(loan) };
}
```

### Algorithm Patterns

- Always implement memoization for recursive algorithms (Fibonacci, LCS, grid paths)
- Prefer iterative DP over naive recursion for O(2^n) → O(n) or O(n²) improvements
- Use appropriate data structures: `Map` over arrays for O(1) lookup, `Set` for deduplication
- For search: binary search over linear scan when data is sorted
- Trie for prefix/autocomplete problems instead of array `.filter(startsWith)`

### Immutability

- Never mutate function arguments — use spread (`{ ...obj, key: value }`) or `Object.freeze`
- Array operations: prefer `.map`, `.filter`, `.reduce` over imperative loops with push/mutation
- State updates in React: always return new references, never mutate state directly

## React / Frontend Patterns

### Component Design

- One component = one responsibility; extract list items, modals, and form fields into their own components
- Use controlled inputs — always bind `value` + `onChange`, never rely on uncontrolled refs for form state
- Provide explicit `key` props on list items using stable IDs, never array index
- Conditional rendering: prefer ternary or `&&` over nested if blocks inside JSX

### Hooks

- `useEffect` dependencies must be exhaustive — include all referenced variables
- Extract fetch logic into custom hooks (`useFetch`, `useCart`, etc.) to separate concerns from render
- Use `useReducer` for forms with 3+ related state fields
- `useMemo` / `useCallback` only when there is a measurable re-render problem — don't premature-optimize
- `React.memo` on leaf components that receive stable props and re-render frequently

### State Management

- Local state (`useState`) for UI-only state (loading, open/closed)
- Context API for shallow prop drilling (2–3 levels)
- Zustand or equivalent for global state that many components read/write
- Never put business logic inside components — extract to hooks or service modules

### Performance

- Code split with `React.lazy` + `Suspense` for heavy routes
- Virtualize long lists (react-window / react-virtual) — never render 1000+ DOM nodes
- Debounce search inputs before triggering fetch/filter operations

## Error Handling

- Use semantic try/catch: catch specific error types, not bare `catch(e) {}`
- Always propagate meaningful error messages — avoid swallowing errors silently
- In React: use Error Boundaries for async/render errors in subtrees

## Module Organization

- One concern per file — avoid barrel files that re-export unrelated utilities
- Export only what consumers need; keep helpers unexported when internal
- Backend service files: separate validation, business logic, and data access layers

## CHALLENGE.md Contract

- Never modify `CHALLENGE.md` — it is the immutable spec
- Evaluation criteria checkboxes in `CHALLENGE.md` are the acceptance tests for your solution
- Solutions go in `<file>.solution.ts` or a `solution/` subfolder
