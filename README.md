# Native Form - Mobile Payment Flow

A React Native mobile payment form application demonstrating a multi-step checkout flow with form validation.

## Demo

https://github.com/user-attachments/assets/4f29dc4c-dda4-44e7-8c3a-5d4c094a989f

## Project Goal

Build a production-ready mobile payment form prototype showcasing:

- **Multi-step form workflow** with visual progress tracking
- **Type-safe form validation** using Zod schemas
- **Reusable component architecture** for scalable development
- **Global state management** across form screens
- **Clean, maintainable code** following React best practices

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React Native 0.76.7 |
| **Platform** | Expo ~52.0 |
| **Language** | TypeScript 5.3 |
| **Navigation** | Expo Router (file-based routing) |
| **Form Management** | React Hook Form 7.54 |
| **Validation** | Zod 3.24 |
| **State Management** | React Context API |

## Features

### 3-Step Payment Flow

1. **Personal Information** - Name, address, phone, date of birth
2. **Payment Details** - Card number, expiry, CVV with save option
3. **Order Summary** - Review all information before submission

### Form Validation

- Real-time validation feedback
- Custom error messages
- Type-safe form data with Zod schema inference
- Format validation (phone: 10 digits, card: 16 digits, CVV: 3 digits)

### Reusable Components

- `CustomInput` - Text input with error handling
- `CustomButton` - Styled button component
- `CustomDatetimePicker` - Native date picker
- `CustomPicker` - Dropdown select
- `CustomCheck` - Checkbox component
- `StepIndicator` - Progress visualization

## Project Structure

```
src/
├── app/                    # Expo Router screens
│   └── payment/           # Payment flow screens
├── components/            # Reusable UI components
├── contexts/              # Global state (SummaryProvider)
└── types/                 # Zod schemas & TypeScript types
```

## Run Locally

```bash
# Install dependencies
npm install

# Start development server
npx expo start
```

## Skills Demonstrated

- React Native & Expo development
- TypeScript for type safety
- Form handling with React Hook Form
- Schema validation with Zod
- Component-driven architecture
- State management patterns
- File-based routing with Expo Router
