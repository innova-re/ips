(function (define) {
    'use strict';

    define([], function () {
        // Might use a resource here that returns a JSON array. For now, some fake testing data.
        var services = [
            {
                "name":"Laboratorio biotecnologico- sezione coltivazioni arboree"
            },
            {
                "name":"Laboratorio Chimico Agrario"
            },
            {
                "name":"Laboratorio di Biosistematica Vegetale"
            },
            {
                "name":"Laboratorio di botanica ambientale e biosistematica vegetale"
            },
            {
                "name":"Laboratorio di Economia e Politica Agraria ed Estimo Rurale"
            },
            {
                "name":"Laboratorio di Enzimologia e Biochimica Applicata"
            },
            {
                "name":"Laboratorio di Fisiologia: Analisi Sensoriali negli Invertebrati"
            },
            {
                "name":"Laboratorio di Fisiologia: Analisi Sensoriali negli Invertebrati"
            },
            {
                "name":"Laboratorio di Genetica Agraria"
            },
            {
                "name":"Laboratorio di Genetica Molecolare e di Popolazione"
            },
            {
                "name":"Laboratorio di Igiene degli Alimenti"
            },
            {
                "name":"Laboratorio di Ittiologia e Biologia Marina"
            },
            {
                "name":"Laboratorio di Microbiologia Generale ed Applicata"
            },
            {
                "name":"Laboratorio di Patologia Vegetale ed Entomologia"
            },
            {
                "name":"Laboratorio di Zoologia Sistematica e Filogenesi Molecolare"
            },
            {
                "name":"Laboratorio Sostanze Naturali ed Alimentari"
            },
            {
                "name":"Laboratorio Strumentazioni Comuni - Farmacia"
            },
            {
                "name":"Laboratorio di Chimica Analitica"
            },
            {
                "name":"Laboratorio di Enzimologia e Biochimica Applicata"
            },
            {
                "name":"Laboratorio di Microbiologia Generale ed Applicata"
            },
            {
                "name":"Laboratorio NMR"
            },
            {
                "name":"Laboratorio Strumentazioni Comuni del Dipartimento di Chimica"
            },
            {
                "name":"Laboratorio di Chimica Analitica"
            },
            {
                "name":"Laboratorio di Cromatografia e Spettrofotometria"
            },
            {
                "name":"Laboratorio di Economia e Politica Agraria ed Estimo Rurale"
            },
            {
                "name":"Laboratorio di Enzimologia e Biochimica Applicata"
            },
            {
                "name":"Laboratorio di Estrazione di Sostanze Naturali"
            },
            {
                "name":"Laboratorio di HPLC"
            },
            {
                "name":"Laboratorio di Microbiologia Generale ed Applicata"
            },
            {
                "name":"Laboratorio di Plasma Accoppiato Induttivamente (ICP)"
            },
            {
                "name":"Laboratorio di Radioattività Ambientale"
            },
            {
                "name":"Laboratorio di Sintesi e Caratterizzazione Elettrochimica di Polimeri Conduttori e Metallopolimeri"
            },
            {
                "name":"Laboratorio di Sistema Neuroendocrino e Fluorescenza (NEF-Laboratory)"
            },
            {
                "name":"Laboratorio di Spettroscopia Applicata"
            },
            {
                "name":"Laboratorio di Spettroscopia Raman NIR"
            },
            {
                "name":"Laboratorio di Spettroscopia Raman Vis"
            },
            {
                "name":"Laboratorio Fluidi Supercritici"
            },
            {
                "name":"Laboratorio Ingegneristico- Sezione Meccanizzazione Impiantistica"
            },
            {
                "name":"Laboratorio Interdipartimentale di Risonanza Magnetica Nucleare"
            },
            {
                "name":"Laboratorio NMR"
            },
            {
                "name":"Laboratorio Sostanze Naturali ed Alimentari"
            },
            {
                "name":"Laboratorio Strumentazioni Comuni - Farmacia"
            },
            {
                "name":"Laboratorio Strumentazioni Comuni del Dipartimento di Chimica"
            },
            {
                "name":"Laboratorio Chimico Agrario"
            },
            {
                "name":"Laboratorio di Drug Design and Nanomedicine"
            },
            {
                "name":"Laboratorio di Microbiologia Generale ed Applicata"
            },
            {
                "name":"Laboratorio Ingegneristico- Sezione Meccanizzazione Impiantistica"
            },
            {
                "name":"Laboratorio NMR"
            },
            {
                "name":"Laboratorio Sostanze Naturali ed Alimentari"
            },
            {
                "name":"Laboratorio Strumentazioni Comuni - Farmacia"
            },
            {
                "name":"Laboratorio Strumentazioni Comuni del Dipartimento di Chimica"
            },
            {
                "name":"Laboratorio di Prototipazione Rapida"
            },
            {
                "name":"Laboratorio di Chimica dei Composti di Coordinazione e di Chimica Bioinorganica"
            },
            {
                "name":"Laboratorio di Economia e Politica Agraria ed Estimo Rurale"
            },
            {
                "name":"Laboratorio di Microbiologia Generale ed Applicata"
            },
            {
                "name":"Laboratorio Ingegneristico- Sezione Meccanizzazione Impiantistica"
            },
            {
                "name":"Laboratorio Sostanze Naturali ed Alimentari"
            },
            {
                "name":"Laboratorio Strumentazioni Comuni - Farmacia"
            },
            {
                "name":"Banca del Germoplasma (BG-SAR)"
            },
            {
                "name":"Laboratorio 2 - Biochimica"
            },
            {
                "name":"Laboratorio Chimico Agrario"
            },
            {
                "name":"Laboratorio Chimico Biologico 1 e 2 - Patologia Sperimentale"
            },
            {
                "name":"Laboratorio di Antropometria e Composizione Corporea"
            },
            {
                "name":"Laboratorio di Biosistematica Vegetale"
            },
            {
                "name":"Laboratorio di Chimica Analitica"
            },
            {
                "name":"Laboratorio di Chimica Bioinorganica"
            },
            {
                "name":"Laboratorio di Chimica dei Composti di Coordinazione e di Chimica Bioinorganica"
            },
            {
                "name":"Laboratorio di Drug Design and Nanomedicine"
            },
            {
                "name":"Laboratorio di Estrazione di Sostanze Naturali"
            },
            {
                "name":"Laboratorio di Fisiologia dello Sport (LABFS)"
            },
            {
                "name":"Laboratorio di Fisiologia: Analisi Sensoriali negli Invertebrati"
            },
            {
                "name":"Laboratorio di Fisiologia: Analisi Sensoriali negli Invertebrati"
            },
            {
                "name":"Laboratorio di Fisiologia: Analisi Sensoriali nell'Uomo"
            },
            {
                "name":"Laboratorio di Fisiologia: Nutrizione Sperimentale"
            },
            {
                "name":"Laboratorio di Gas-Massa"
            },
            {
                "name":"Laboratorio di Genetica Molecolare e di Popolazione"
            },
            {
                "name":"Laboratorio di HPLC"
            },
            {
                "name":"Laboratorio di HPLC"
            },
            {
                "name":"Laboratorio di Igiene Applicata"
            },
            {
                "name":"Laboratorio di Igiene degli Alimenti"
            },
            {
                "name":"Laboratorio di Microbiologia Generale ed Applicata"
            },
            {
                "name":"Laboratorio di Neurochimica"
            },
            {
                "name":"Laboratorio di Neurofisiologia"
            },
            {
                "name":"Laboratorio di Patologia Cellulare e Molecolare"
            },
            {
                "name":"Laboratorio di Patologia Vegetale ed Entomologia"
            },
            {
                "name":"Laboratorio di Plasma Accoppiato Induttivamente (ICP)"
            },
            {
                "name":"Laboratorio di Spettrometria di Massa"
            },
            {
                "name":"Laboratorio NMR"
            },
            {
                "name":"Laboratorio Strumentazioni Comuni del Dipartimento di Chimica"
            },
            {
                "name":"Banca del Germoplasma (BG-SAR)"
            },
            {
                "name":"Laboratorio Chimico Agrario"
            },
            {
                "name":"Laboratorio di Agrometereologia ed Ecofisiologia"
            },
            {
                "name":"Laboratorio di Agronomia ed Ecofisiologia"
            },
            {
                "name":"Laboratorio di biodiversità marina, acqua dolce e terrestre."
            },
            {
                "name":"Laboratorio di Botanica Economica e Farmaceutica"
            },
            {
                "name":"Laboratorio di Chimica Analitica"
            },
            {
                "name":"Laboratorio di Diffrattometria"
            },
            {
                "name":"Laboratorio di Economia e Politica Agraria ed Estimo Rurale"
            },
            {
                "name":"Laboratorio di Fisiologia: Analisi Sensoriali negli Invertebrati"
            },
            {
                "name":"Laboratorio di Fisiologia: Analisi Sensoriali negli Invertebrati"
            },
            {
                "name":"Laboratorio di Genetica Molecolare e di Popolazione"
            },
            {
                "name":"Laboratorio di Microbiologia Generale ed Applicata"
            },
            {
                "name":"Laboratorio di Patologia Vegetale ed Entomologia"
            },
            {
                "name":"Laboratorio di Visione Artificiale"
            },
            {
                "name":"Laboratorio di Zoologia Sistematica e Filogenesi Molecolare"
            },
            {
                "name":"Laboratorio Ingegneristico- Sezione Meccanizzazione Impiantistica"
            },
            {
                "name":"Laboratorio Sperimentale per lo Studio delle Variabili Inerenti l'Impatto delle Nuove Tecnologie sui Sistemi Socio-Economici, la Qualità dei Processi Produttivi e dei Sistemi di Gestione Ambientale"
            }
        ];

        return {
            get: function () {
                return services;
            }
        }
    });
}(this.define));
