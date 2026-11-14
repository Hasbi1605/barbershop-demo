# Barbershop POS — UI Preview (Static Mirror)

Static UI preview of the **Barbershop POS** application (Spring Boot + Thymeleaf),
built for the portfolio of Muhammad Hasbi Ash Shiddiqi.

**Live preview:** https://portofolio-hasbi.web.id/barbershop-demo/

## What this is

The pages are the application's own Thymeleaf templates rendered into static HTML —
same markup, same CSS/JS (SB Admin 2 admin theme + the public barbershop site
template), with the seed data from the project's own `barbershop_db.sql` dump baked
into the tables (services, kapsters, reservations, transactions, users; user
passwords are masked). Form submissions are neutralized with a small demo script.

The Java backend (serverapp REST API + clientapp) does not run in this static
preview; the full source lives in the main project repository.

## Pages

- Public site: `index` (landing), `service`, `booking`, `about`, `contact`, `login`
- Admin/POS: `admin` (point of sale), `dashboard` (analytics), `services`,
  `kapster`, `reservations`, `users`, `profile`
