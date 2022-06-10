--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.25
-- Dumped by pg_dump version 9.5.25

-- Started on 2022-05-27 21:59:50

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12355)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2146 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 182 (class 1259 OID 16396)
-- Name: colaborador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.colaborador (
    col_codigo integer NOT NULL,
    col_nombre_apellido character varying(60),
    col_correo character varying(50),
    col_ci character varying(15),
    col_telefono character varying(20),
    col_genero character varying,
    col_sector character varying
);


ALTER TABLE public.colaborador OWNER TO postgres;

--
-- TOC entry 181 (class 1259 OID 16394)
-- Name: colaborador_col_codigo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.colaborador_col_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.colaborador_col_codigo_seq OWNER TO postgres;

--
-- TOC entry 2147 (class 0 OID 0)
-- Dependencies: 181
-- Name: colaborador_col_codigo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.colaborador_col_codigo_seq OWNED BY public.colaborador.col_codigo;


--
-- TOC entry 188 (class 1259 OID 16437)
-- Name: reconocimiento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reconocimiento (
    re_codigo integer NOT NULL,
    re_codcol integer,
    re_codval integer,
    re_mensaje character varying
);


ALTER TABLE public.reconocimiento OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 16435)
-- Name: reconocimiento_re_codigo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reconocimiento_re_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reconocimiento_re_codigo_seq OWNER TO postgres;

--
-- TOC entry 2148 (class 0 OID 0)
-- Dependencies: 187
-- Name: reconocimiento_re_codigo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reconocimiento_re_codigo_seq OWNED BY public.reconocimiento.re_codigo;


--
-- TOC entry 184 (class 1259 OID 16404)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    usu_codigo integer NOT NULL,
    usu_nombre character varying(20),
    usu_apellido character varying(20),
    usu_correo character varying(30),
    usu_pass character varying(12),
    usu_token character varying,
    usu_imagen text
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 16402)
-- Name: usuario_usu_codigo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_usu_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuario_usu_codigo_seq OWNER TO postgres;

--
-- TOC entry 2149 (class 0 OID 0)
-- Dependencies: 183
-- Name: usuario_usu_codigo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_usu_codigo_seq OWNED BY public.usuario.usu_codigo;


--
-- TOC entry 186 (class 1259 OID 16412)
-- Name: valor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.valor (
    val_codigo integer NOT NULL,
    val_nombre character varying(20),
    val_descripcion character varying(40)
);


ALTER TABLE public.valor OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 16410)
-- Name: valor_val_codigo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.valor_val_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.valor_val_codigo_seq OWNER TO postgres;

--
-- TOC entry 2150 (class 0 OID 0)
-- Dependencies: 185
-- Name: valor_val_codigo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.valor_val_codigo_seq OWNED BY public.valor.val_codigo;


--
-- TOC entry 2002 (class 2604 OID 16399)
-- Name: col_codigo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colaborador ALTER COLUMN col_codigo SET DEFAULT nextval('public.colaborador_col_codigo_seq'::regclass);


--
-- TOC entry 2005 (class 2604 OID 16440)
-- Name: re_codigo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reconocimiento ALTER COLUMN re_codigo SET DEFAULT nextval('public.reconocimiento_re_codigo_seq'::regclass);


--
-- TOC entry 2003 (class 2604 OID 16407)
-- Name: usu_codigo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN usu_codigo SET DEFAULT nextval('public.usuario_usu_codigo_seq'::regclass);


--
-- TOC entry 2004 (class 2604 OID 16415)
-- Name: val_codigo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.valor ALTER COLUMN val_codigo SET DEFAULT nextval('public.valor_val_codigo_seq'::regclass);


--
-- TOC entry 2131 (class 0 OID 16396)
-- Dependencies: 182
-- Data for Name: colaborador; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.colaborador (col_codigo, col_nombre_apellido, col_correo, col_ci, col_telefono, col_genero, col_sector) FROM stdin;
17	Maria Bogado	mari@gmai.com	5928946	0975897527	F	C
12	 Marian Fretes	ssss@gmail.com	1234567	09758424	F	A
7	 Carmen Azuaga	prueba3@gmail.com	4571641	0971542416	\N	A
\.


--
-- TOC entry 2151 (class 0 OID 0)
-- Dependencies: 181
-- Name: colaborador_col_codigo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.colaborador_col_codigo_seq', 24, true);


--
-- TOC entry 2137 (class 0 OID 16437)
-- Dependencies: 188
-- Data for Name: reconocimiento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reconocimiento (re_codigo, re_codcol, re_codval, re_mensaje) FROM stdin;
8	7	3	Fer
9	17	2	Se valora el tiempo breve en las entregas
10	17	10	preubaaa
1	17	3	Hola mundo1
11	12	13	Por realizar entrega con minimo de dias
12	12	3	Por ser ejemplo para los demas
13	17	10	Por el Trabajo realizado con exito y liderazgo
\.


--
-- TOC entry 2152 (class 0 OID 0)
-- Dependencies: 187
-- Name: reconocimiento_re_codigo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reconocimiento_re_codigo_seq', 13, true);


--
-- TOC entry 2133 (class 0 OID 16404)
-- Dependencies: 184
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (usu_codigo, usu_nombre, usu_apellido, usu_correo, usu_pass, usu_token, usu_imagen) FROM stdin;
1	Maria	Bogado	maria@gmail.com	123456	\N	\N
2	fer	bogado	mundibo@gmail.com	123456	\N	\N
3	Fernanda	Azuaga	as@gmail.com	123456	\N	\N
4	luis	martinez	luis@gmailcom	123	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VfY29ycmVvIjoibHVpc0BnbWFpbGNvbSIsInVzdV9jb2RpZ28iOjQsImlhdCI6MTY1MzY5MzU5MH0.mThHVdM6cZwELp6_K9uE69BCsrqN5hs4Kt-kkiXGQ4s	\N
5	Fer	Bogado	fer123@gmail.com	123	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VfY29ycmVvIjoiZmVyMTIzQGdtYWlsLmNvbSIsInVzdV9jb2RpZ28iOjUsImlhdCI6MTY1MzY5NTU0MH0.bud8l9MKCW-Z8zPZioEGIc5PNfefOgon-wGCFhoGbS4	\N
6	Fer	Azuaga	azu@gmail.com	789	\N	\N
7	fer	bogado	ferbogado@gmail.com	789	\N	\N
8	fernanda	bogado	fer@gmail.com	789	\N	\N
9	fernanda	bogado	fer@gmail.com	789	\N	\N
10	fer	bogado	maria@gmail.com	789456	\N	\N
11	maria	azuaga	maria@gmail.com	789	\N	\N
12	maria	azuaga	maria@gmail.com	789456	\N	\N
13	fer	bogado	maria@gmail.com	456789	\N	\N
14	fer	bogado	ferbogado@gmail.com	789456	\N	\N
15	Fer	Bogado	mari@gmail.com	789456	\N	\N
16	fer	bogado	fer@gmail.com	789456	\N	\N
17	fer	bogado	maria@gmail.com	789456	\N	\N
\.


--
-- TOC entry 2153 (class 0 OID 0)
-- Dependencies: 183
-- Name: usuario_usu_codigo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_usu_codigo_seq', 17, true);


--
-- TOC entry 2135 (class 0 OID 16412)
-- Dependencies: 186
-- Data for Name: valor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.valor (val_codigo, val_nombre, val_descripcion) FROM stdin;
2	Responsabilidad	Compromiso con su actividad
3	Liderazgo	Persuasivo y comparte informacion para a
11	Habilidades Humanas	Forma de Resolver conflictos y capacidad
13	Productividad 	Entrega rapida de resultados 3
10	Comunicacion 25 	Transmitir con fluidez
\.


--
-- TOC entry 2154 (class 0 OID 0)
-- Dependencies: 185
-- Name: valor_val_codigo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.valor_val_codigo_seq', 14, true);


--
-- TOC entry 2007 (class 2606 OID 16401)
-- Name: colaborador_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colaborador
    ADD CONSTRAINT colaborador_pkey PRIMARY KEY (col_codigo);


--
-- TOC entry 2013 (class 2606 OID 16445)
-- Name: reconocimiento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reconocimiento
    ADD CONSTRAINT reconocimiento_pkey PRIMARY KEY (re_codigo);


--
-- TOC entry 2009 (class 2606 OID 16409)
-- Name: usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (usu_codigo);


--
-- TOC entry 2011 (class 2606 OID 16417)
-- Name: valor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.valor
    ADD CONSTRAINT valor_pkey PRIMARY KEY (val_codigo);


--
-- TOC entry 2014 (class 2606 OID 16446)
-- Name: reconocimiento_re_codcol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reconocimiento
    ADD CONSTRAINT reconocimiento_re_codcol_fkey FOREIGN KEY (re_codcol) REFERENCES public.colaborador(col_codigo);


--
-- TOC entry 2015 (class 2606 OID 16451)
-- Name: reconocimiento_re_codval_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reconocimiento
    ADD CONSTRAINT reconocimiento_re_codval_fkey FOREIGN KEY (re_codval) REFERENCES public.valor(val_codigo);


--
-- TOC entry 2145 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2022-05-27 21:59:51

--
-- PostgreSQL database dump complete
--

