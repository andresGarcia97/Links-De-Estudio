import {
    ANALISIS_DATA_KEY, ANALISIS_KEY, ARQUITECTURAS_KEY, CI_CD_KEY, ESTRATEGIAS_DESARROLLO_KEY, HARDWARE_KEY, META_CARACTERISTICAS_KEY,
    METODOLOGIAS_KEY,PARADIGMAS_KEY, PERSISTENCY_ADVANCED_KEY, PERSISTENCY_KEY, PRINCIPIOS_KEY, REFACTORING_KEY, REQUISITOS_KEY,
    SMELL_CODES_KEY, SYSTEM_DESIGN_KEY, TESTING_ADVANCED_KEY, TESTING_KEY, VERSIONAMIENTO_KEY
}
    from "./linkReferencia";
import { RelationKeyWithSection } from "./models";

export const HARDWARE_PATH = new RelationKeyWithSection(HARDWARE_KEY, 'hardware', 'hardware');
export const ANALISIS_DATA_PATH = new RelationKeyWithSection(ANALISIS_DATA_KEY, 'analisis_data', 'analisisData');
export const PERSISTENCY_PATH = new RelationKeyWithSection(PERSISTENCY_KEY, 'persistency', 'persistency');
export const PERSISTENCY_ADVANCED_PATH = new RelationKeyWithSection(PERSISTENCY_ADVANCED_KEY, 'persistency_advanced', 'persistency');
export const PARADIGMAS_PATH = new RelationKeyWithSection(PARADIGMAS_KEY, 'paradigmas', 'paradigmas');
export const ANALISIS_PATH = new RelationKeyWithSection(ANALISIS_KEY, 'analisis', 'analisis');
export const METODOLOGIAS_PATH = new RelationKeyWithSection(METODOLOGIAS_KEY, 'metodologias', 'metodologias');
export const SYSTEM_DESIGN_PATH = new RelationKeyWithSection(SYSTEM_DESIGN_KEY, 'system_design', 'systemDesign');
export const TESTING_PATH = new RelationKeyWithSection(TESTING_KEY, 'testing', 'testing');
export const TESTING_ADVANCED_PATH = new RelationKeyWithSection(TESTING_ADVANCED_KEY, 'testing_advanced', 'testing');
export const CICD_INFRAESTRUCTURE_PATH = new RelationKeyWithSection(CI_CD_KEY, 'cicd_infraestructure', 'infraestructure');
export const PRINCIPIOS_PATH = new RelationKeyWithSection(PRINCIPIOS_KEY, 'principios', 'principios');
export const REFACTORING_PATH = new RelationKeyWithSection(REFACTORING_KEY, 'refactoring', 'refactoring');
export const REQUISITOS_PATH = new RelationKeyWithSection(REQUISITOS_KEY, 'requisitos', 'requisitos');
export const SMELL_CODES_PATH = new RelationKeyWithSection(SMELL_CODES_KEY, 'smell_codes', 'smellCodes');
export const VERSIONAMIENTO_PATH = new RelationKeyWithSection(VERSIONAMIENTO_KEY, 'versioning', 'versioning');
export const ARQUITECTURAS_PATH = new RelationKeyWithSection(ARQUITECTURAS_KEY, 'arquitecturas', 'arquitecturas');
export const ESTRATEGIAS_PATH = new RelationKeyWithSection(ESTRATEGIAS_DESARROLLO_KEY, 'estrategias_desarrollo', 'estrategias');
export const CARACTERISTICAS_PATH = new RelationKeyWithSection(META_CARACTERISTICAS_KEY, 'meta_caracteristicas', 'caracteristicas');