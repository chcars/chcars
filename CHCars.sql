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
    photo_mobile TEXT,
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
    tiktok_url
) VALUES (
    'CH Cars',
    E'Especialistas en chapa, pintura y microbollos en Córdoba \nTrabajamos con las principales aseguradoras',
    '3516620701',
    '5493516620701',
    'tallerchcars@gmail.com',
    'Avenida Bodereau 8860, Córdoba, Argentina',
    'https://maps.app.goo.gl/4kUw1T2sd6kFyA3S8',
    -31.319439,
    -64.288286,
    'Lunes a Viernes de 8:00 a 18:00',
    'https://facebook.com/tallerchcars',
    'https://instagram.com/tallerchcars'
);

INSERT INTO seo_meta (page, meta_title, meta_description) VALUES
('home', 'Taller de Chapa y Pintura en Córdoba | CH Cars',
 'Taller de chapa y pintura en Córdoba especializado en microbollo, pintura y reparación de siniestros. Trabajamos con las principales aseguradoras.'),
('trabajos', 'Antes y Después | CH Cars Taller Chapa y Pintura',
 'Mirá el antes y después de nuestros trabajos de chapa, pintura y microbollo en Córdoba.'),
('nosotros', 'Sobre Nosotros | CH Cars - Taller de Chapa y Pintura',
 'Conocé la historia de CH Cars, taller especializado en chapa, pintura y microbollo en Córdoba.');

 -- ============================================
-- Seed: Preguntas Frecuentes (questions)
-- ============================================

-- Presupuestos y pagos
INSERT INTO questions (question, answer, category, show_on_home, display_order) VALUES
('¿El presupuesto es gratuito?',
 'Sí, siempre. Realizamos la evaluación sin costo y sin compromiso.',
 'Presupuestos y pagos', TRUE, 1), -- destacada en home

('¿Aceptan todas las formas de pago?',
 'Aceptamos efectivo, transferencia, tarjetas de crédito y débito. Para montos grandes, consultá sobre planes en cuotas.',
 'Presupuestos y pagos', FALSE, 2),

('¿Puedo pagar en cuotas?',
 'Sí, trabajamos con tarjetas que ofrecen planes en cuotas sin interés. Consultá las tarjetas disponibles.',
 'Presupuestos y pagos', FALSE, 3);

-- Seguros y siniestros
INSERT INTO questions (question, answer, category, show_on_home, display_order) VALUES
('¿Con qué aseguradoras trabajan?',
 'Con todas las principales: La Caja, Sancor, MAPFRE, Zurich, Federación Patronal, SMG, Galicia, Río Uruguay y más.',
 'Seguros y siniestros', TRUE, 1), -- destacada en home

('¿Me pueden ayudar con el trámite del seguro?',
 'Sí. Gestionamos el siniestro con la compañía directamente, coordinamos la visita del perito y trabajamos sobre el presupuesto aprobado.',
 'Seguros y siniestros', FALSE, 2),

('¿Qué pasa si el seguro no cubre todo?',
 'Te informamos antes de empezar cuál es el saldo a cargo tuyo, si existiera, para que no haya sorpresas.',
 'Seguros y siniestros', FALSE, 3);

-- Tiempos de reparación
INSERT INTO questions (question, answer, category, show_on_home, display_order) VALUES
('¿Cuánto tarda una reparación de chapa?',
 'Depende de la magnitud del daño.',
 'Tiempos de reparación', FALSE, 1),

('¿Puedo llevar el auto sin turno?',
 'Podés venir a hacer el presupuesto sin turno. Para ingresar el vehículo a reparación, preferimos coordinar un horario para asegurarte atención inmediata.',
 'Tiempos de reparación', TRUE, 2), -- destacada en home

('¿Me avisan cuando el auto está listo?',
 'Sí, te notificamos por WhatsApp o teléfono cuando el vehículo está listo para retirar. También podés consultar el estado en cualquier momento.',
 'Tiempos de reparación', FALSE, 3);

-- Garantías
INSERT INTO questions (question, answer, category, show_on_home, display_order) VALUES
('¿Cuánto tiempo de garantía tiene el trabajo?',
 '12 meses sobre pintura y chapa. Si detectás alguna falla relacionada con el trabajo realizado, lo solucionamos sin costo.',
 'Garantías', TRUE, 1), -- destacada en home

('¿Cómo reclamo la garantía?',
 'Simplemente presentate con el remito de entrega. No necesitás nada más. Evaluamos el caso y si es cubierto por garantía, lo reparamos de inmediato.',
 'Garantías', FALSE, 2);

 -- ============================================
-- Seed: Servicios (services)
-- ============================================

INSERT INTO services (name, description, photo, photo_alt, display_order) VALUES
('Chapa',
 'Reparación integral de carrocería, reemplazo de paneles y soldadura estructural.',
 '/images/services/chapa.webp',
 'Reparación de chapa en taller de Córdoba',
 1),

('Pintura',
 'Cabina climatizada, pintura bicapa y barniz de alta resistencia UV.',
 '/images/services/pintura.jpg',
 'Pintura automotriz profesional en Córdoba',
 2),

('Microbollo',
 'Reparación de microabolladuras sin pintura en Córdoba, con extracción de precisión y sin dañar la pintura original.',
 '/images/services/microbollo.jpg',
 'Reparación de microbollo en Córdoba',
 3),

('Pulido & Detailing',
 'Corrección de pintura, focos y protección cerámica profesional.',
 '/images/services/pulido_detailing.jpg',
 'Pulido y detailing de autos en Córdoba',
 4);

-- ============================================
-- Seed: Aseguradoras (aseguradoras)
-- ============================================
 INSERT INTO aseguradoras (
    name,
    photo,
    photo_alt
)
VALUES (
    'La Caja',
    '/images/aseguradoras/Logo_La_Caja.png',
    'Logo de La Caja Seguros'
),
(
    'La Segunda',
    '/images/aseguradoras/laSegunda.webp',
    'Logo de La Segunda Seguros'
)
;

-- ============================================
-- Seed: Banner (hero de la home)
-- ============================================
INSERT INTO banner (
    text,
    photo,
    photo_mobile,
    photo_alt,
    button_text,
    button_url
) VALUES (
    'Tu auto\nvuelve\ncomo nuevo.',
    '/images/banner/bannerAuto.png',
    '/images/banner/bannerCelular.png',
    'Taller de chapa y pintura CH Cars',
    'Solicitá tu presupuesto',
    'https://wa.me/5493516620701'
);

-- ============================================
-- Seed: Trabajos realizados (jobs)
-- ============================================
INSERT INTO jobs (
    name,
    description,
    photo_before,
    photo_before_alt,
    photo_after,
    photo_after_alt,
    category,
    vehicule,
    display_order
) VALUES
(
    'Pintura de paragolpes',
    'Pintura completa de paragolpes trasero con acabado de fábrica.',
    '/images/jobs/antes/208rojo.jpeg',
    'Paragolpes trasero dañado antes de la reparación',
    '/images/jobs/despues/208rojo.jpeg',
    'Paragolpes trasero reparado y pintado',
    'Pintura',
    'Peugeot 208',
    1
);
INSERT INTO jobs (
    name,
    description,
    photo_before,
    photo_before_alt,
    photo_after,
    photo_after_alt,
    category,
    vehicule,
    display_order
) VALUES
(
    'Pintura de puertas y guardabarros',
    'Pintura completa de puerta y guardabarro trasero con acabado de fábrica.',
    '/images/jobs/antes/rangerblanca.jpeg',
    'Puerta y guardabarro trasero dañados antes de la reparación',
    '/images/jobs/despues/rangerblanca.jpeg',
    'Puerta y guardabarro trasero pintados',
    'Pintura',
    'Ford Ranger',
    2
);
-- ============================================
-- Seed: Contenido de la página "Nosotros" (about_us)
-- ============================================

INSERT INTO about_us (
    title,
    description,
    photo,
    photo_alt
) VALUES (
    'Más de 20 años cuidando tu auto',
    E'Desde hace más de 20 años, CH Cars es sinónimo de confianza en Córdoba para quienes buscan un taller de chapa y pintura serio, prolijo y con atención cercana.\n\nTrabajamos cada vehículo con la misma dedicación: reparaciones de chapa, pintura, microbollo y trabajos integrales, siempre con acabados de fábrica y materiales de primera calidad.\n\nSabemos que dejar tu auto en un taller no es un trámite más, por eso te acompañamos en todo el proceso con información clara, tiempos reales y la garantía de que va a volver a tus manos como el primer día.',
    '/images/nosotros/taller.png',
    'Taller de CH Cars en Córdoba'
);