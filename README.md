# RealEstate CRM System

A modern, full‑stack, fully automated Customer Relationship Management (CRM) platform tailored for real estate teams. It streamlines lead intake, deal pipelines, property inventory, tasking, and reporting—built with Next.js and Node.js for performance, scalability, and developer productivity.

## Key Features

- Lead management: capture, deduplicate, score, and assign leads
- Pipeline and deals: customizable stages, kanban views, win/loss tracking
- Property management: listings, availability, documents, and notes
- Tasks and reminders: SLA tracking, follow-ups, calendar integration
- Communication: templated emails/SMS, activity timelines, attachments
- Role-based access: teams, permissions, and audit logs
- Analytics: funnel metrics, team performance, and revenue forecasts
- Automation: webhooks, scheduled jobs, and configurable workflows

## Tech Stack

- Frontend: Next.js (App Router), React, Tailwind CSS
- Backend: Node.js with API routes and/or Express
- Database & ORM: Prisma with a SQL database (e.g., PostgreSQL or MySQL)
- Tooling: TypeScript, ESLint, Prettier, dotenv
- Deployment: Supports Node hosting and containerized environments

## Architecture Overview

- Web app (Next.js) serves UI, server-side rendering, and API endpoints
- Backend services (Node/Express or Next.js routes) handle business logic
- Prisma mediates data access and migrations
- Environment-driven configuration for safe and reproducible setups

## Getting Started

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm 10+
- A SQL database (e.g., PostgreSQL) and connection URL

### 1) Clone and install
