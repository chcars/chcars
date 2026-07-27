-- ============================================
-- Base de datos: Taller de Chapa y Pintura
-- Motor: PostgreSQL
-- ============================================

-- Banner (hero de la home)
CREATE TABLE banner (
    banner_id    SERIAL PRIMARY KEY,
    text         TEXT NOT NULL,
    photo        TEXT NOT NULL,
    photo_alt     VARCHAR(200),
    button_text  VARCHAR(100),
    button_url   TEXT
);

-- Aseguradoras con las que trabaja el taller
CREATE TABLE aseguradoras (
    aseguradora_id  SERIAL PRIMARY KEY,
    name            VARCHAR(100) NOT NULL,
    photo           TEXT NOT NULL,
    photo_alt     VARCHAR(200)
);

-- Servicios que ofrece el taller
CREATE TABLE services (
    service_id   SERIAL PRIMARY KEY,
    name         VARCHAR(150) NOT NULL,
    description  TEXT,
    photo        TEXT NOT NULL,
    photo_alt     VARCHAR(200),
    display_order     INTEGER DEFAULT 0
);

-- Reseñas de Google
CREATE TABLE google_reviews (
    review_id         SERIAL PRIMARY KEY,
    google_review_id  VARCHAR(255) UNIQUE,
    author_name       VARCHAR(150) NOT NULL,
    rating            SMALLINT CHECK (rating BETWEEN 1 AND 5),
    review_url        TEXT,
    description       TEXT
);

-- Preguntas frecuentes
CREATE TABLE questions (
    question_id   SERIAL PRIMARY KEY,
    question      TEXT NOT NULL,
    answer        TEXT NOT NULL,
    category      VARCHAR(100),
    show_on_home  BOOLEAN DEFAULT FALSE,
    display_order INTEGER DEFAULT 0
);

-- Trabajos realizados (antes y después)
CREATE TABLE jobs (
    job_id        SERIAL PRIMARY KEY,
    name          VARCHAR(150) NOT NULL,
    description   TEXT,
    photo_before  TEXT NOT NULL,
    photo_before_alt   VARCHAR(200),
    photo_after   TEXT NOT NULL,
    photo_after_alt    VARCHAR(200),
    category      VARCHAR(50),
    vehicule      VARCHAR(150),
    display_order INTEGER DEFAULT 0
);
-- SEO de páginas generales
CREATE TABLE seo_meta (
    seo_id              SERIAL PRIMARY KEY,
    page                VARCHAR(50) UNIQUE NOT NULL,
    meta_title          VARCHAR(60) NOT NULL,
    meta_description    VARCHAR(160) NOT NULL
);

-- Configuración general del sitio
CREATE TABLE settings (
    settings_id     SERIAL PRIMARY KEY,
    business_name   VARCHAR(150) NOT NULL,
    slogan          VARCHAR(200),

    phone           VARCHAR(50),
    whatsapp        VARCHAR(50),
    email           VARCHAR(150),

    address         TEXT,
    google_maps_url TEXT,
    latitude   NUMERIC(9,6),
    longitude  NUMERIC(9,6)

    opening_hours   TEXT,

    facebook_url    TEXT,
    instagram_url   TEXT,
    tiktok_url      TEXT,
    youtube_url     TEXT,

    created_at      TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
-- Contenido de la página "Nosotros"
CREATE TABLE about_us (
    about_id     SERIAL PRIMARY KEY,
    title        VARCHAR(150) NOT NULL,
    description  TEXT NOT NULL,
    photo        TEXT NOT NULL,
    photo_alt     VARCHAR(200),
    updated_at   TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO settings (
    business_name,
    slogan,
    phone,
    whatsapp,
    email,
    address,
    google_maps_url,
    latitude,
    longitude,
    opening_hours,
    facebook_url,
    instagram_url,
    tiktok_url,
    youtube_url
) VALUES (
    'Taller XYZ',
    'Especialistas en chapa y pintura',
    '3511234567',
    '5493511234567',
    'contacto@tallerxyz.com',
    'Av. Siempre Viva 123, Córdoba',
    'https://maps.google.com/...',
    -31.405873,
    -64.182019,
    'Lunes a Viernes de 8:00 a 18:00',
    'https://facebook.com/tallerxyz',
    'https://instagram.com/tallerxyz',
    NULL,
    NULL
);