# MekRecords (Frontend)

## Project Structure

```text
mekrecords-frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── assets/              # Images, fonts, icons
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/          # Reusable components
│   │   ├── common/          # Shared across app
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Loader.tsx
│   │   │
│   │   ├── layout/          # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   └── features/        # Feature-specific components
│   │       ├── sales/
│   │       │   ├── SaleForm.tsx
│   │       │   ├── SalesList.tsx
│   │       │   └── SaleCard.tsx
│   │       │
│   │       ├── batches/
│   │       │   ├── BatchForm.tsx
│   │       │   └── BatchList.tsx
│   │       │
│   │       └── dashboard/
│   │           ├── StatsCard.tsx
│   │           └── RevenueChart.tsx
│   │
│   ├── pages/               # Full page components
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   └── ChangePassword.tsx
│   │   │
│   │   ├── Dashboard.tsx
│   │   ├── Sales.tsx
│   │   ├── RecordSale.tsx
│   │   ├── Batches.tsx
│   │   ├── Reports.tsx
│   │   └── Users.tsx        # Admin only
│   │
│   ├── store/               # State management
│   │   ├── authStore.ts     # Authentication state
│   │   ├── salesStore.ts    # Sales state
│   │   └── batchStore.ts    # Batch state
│   │
│   ├── services/            # API calls
│   │   ├── api.ts           # Axios instance & config
│   │   ├── authService.ts   # Auth API calls
│   │   ├── salesService.ts  # Sales API calls
│   │   ├── batchService.ts  # Batch API calls
│   │   └── reportService.ts # Report API calls
│   │
│   ├── types/               # TypeScript types
│   │   ├── auth.types.ts
│   │   ├── sales.types.ts
│   │   ├── batch.types.ts
│   │   └── api.types.ts
│   │
│   ├── utils/               # Helper functions
│   │   ├── formatters.ts    # Date, currency formatting
│   │   ├── validators.ts    # Form validation
│   │   └── constants.ts     # App constants
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useSales.ts
│   │   └── useDebounce.ts
│   │
│   ├── routes/              # Routing
│   │   ├── AppRoutes.tsx
│   │   ├── ProtectedRoute.tsx
│   │   └── AdminRoute.tsx
│   │
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
│
├── .env                     # Environment variables
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Component Tree

```text
App
├── Routes
│   ├── Public Routes
│   │   └── Login
│   │
│   └── Protected Routes (Requires Auth)
│       ├── Dashboard Layout (Navbar + Sidebar + Content)
│       │   ├── Dashboard
│       │   ├── Sales
│       │   ├── RecordSale
│       │   ├── Batches
│       │   ├── Reports
│       │   └── Users (Admin Only)
│       │
│       └── ChangePassword
```
