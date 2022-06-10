--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.25
-- Dumped by pg_dump version 9.5.25

-- Started on 2022-06-10 19:36:09

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 192 (class 1259 OID 16488)
-- Name: clasificador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clasificador (
    cla_codigo integer NOT NULL,
    cla_descripcion character varying
);


ALTER TABLE public.clasificador OWNER TO postgres;

--
-- TOC entry 191 (class 1259 OID 16486)
-- Name: clasificador_cla_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clasificador_cla_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clasificador_cla_id_seq OWNER TO postgres;

--
-- TOC entry 2134 (class 0 OID 0)
-- Dependencies: 191
-- Name: clasificador_cla_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clasificador_cla_id_seq OWNED BY public.clasificador.cla_codigo;


--
-- TOC entry 2010 (class 2604 OID 16491)
-- Name: cla_codigo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clasificador ALTER COLUMN cla_codigo SET DEFAULT nextval('public.clasificador_cla_id_seq'::regclass);


--
-- TOC entry 2128 (class 0 OID 16488)
-- Dependencies: 192
-- Data for Name: clasificador; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clasificador (cla_codigo, cla_descripcion) FROM stdin;
1	prueba
4	prueba4
5	prueba5
7	prueba12
8	prueba115
3	prueba final 
\.


--
-- TOC entry 2135 (class 0 OID 0)
-- Dependencies: 191
-- Name: clasificador_cla_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clasificador_cla_id_seq', 9, true);


--
-- TOC entry 2012 (class 2606 OID 16496)
-- Name: clasificador_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clasificador
    ADD CONSTRAINT clasificador_pkey PRIMARY KEY (cla_codigo);


-- Completed on 2022-06-10 19:36:10

--
-- PostgreSQL database dump complete
--

