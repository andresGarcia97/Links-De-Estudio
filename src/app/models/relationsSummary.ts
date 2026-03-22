import {
    AGILES_KEY, ANALISIS_DATA_KEY, ANALISIS_KEY, APIS_KEY, ARQUITECTURAS_KEY, BUENAS_PRACTICAS_KEY, CALIDAD_KEY, CI_CD_KEY,
    COMPILACION_KEY, CONOCIMIENTO_EMPIRICO_KEY, ESTRATEGIAS_DESARROLLO_KEY, FRAMEWORKS_KEY, GIT_KEY, HARDWARE_KEY, LEYES_KEY,
    MALAS_PRACTICAS_KEY, META_CARACTERISTICAS_KEY, META_ESTRUCTURAS_KEY, METODOLOGIAS_KEY, MICRO_SERVICES_ADVANCED_KEY,
    MICRO_SERVICES_KEY, NUBE_KEY, PARADIGMAS_KEY, PATRONES_KEY, PEOPLE_KEY, PERSISTENCY_ADVANCED_KEY, PERSISTENCY_KEY,
    POO_KEY, PRINCIPIOS_KEY, REFACTORING_KEY, REQUISITOS_KEY, SMELL_CODES_KEY, SYSTEM_DESIGN_KEY, TESTING_ADVANCED_KEY,
    TESTING_KEY, UML_KEY, VERSIONAMIENTO_KEY, WEB_KEY
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
export const POO_PATH = new RelationKeyWithSection(POO_KEY, 'poo', 'poo');
export const APIS_PATH = new RelationKeyWithSection(APIS_KEY, 'apis', 'apis');
export const ESTRUCTURAS_PATH = new RelationKeyWithSection(META_ESTRUCTURAS_KEY, 'meta_estructuras', 'estructuras');
export const MICROSERVICES_PATH = new RelationKeyWithSection(MICRO_SERVICES_KEY, 'microservices', 'microservices');
export const MICROSERVICES_ADVANCED_PATH = new RelationKeyWithSection(MICRO_SERVICES_ADVANCED_KEY, 'microservices_advanced', 'micro');
export const NUBE_PATH = new RelationKeyWithSection(NUBE_KEY, 'nube', 'nube');
export const PEOPLE_PATH = new RelationKeyWithSection(PEOPLE_KEY, 'people', 'people');
export const BUENAS_PRACTICAS_PATH = new RelationKeyWithSection(BUENAS_PRACTICAS_KEY, 'buenas_practicas', 'practicas');
export const MALAS_PRACTICAS_PATH = new RelationKeyWithSection(MALAS_PRACTICAS_KEY, 'malas_practicas', 'practicas');
export const CALIDAD_PATH = new RelationKeyWithSection(CALIDAD_KEY, 'calidad', 'calidad');
export const GIT_PATH = new RelationKeyWithSection(GIT_KEY, 'git', 'git');
export const LEYES_PATH = new RelationKeyWithSection(LEYES_KEY, 'leyes', 'leyes');
export const AGILES_PATH = new RelationKeyWithSection(AGILES_KEY, 'agiles', 'agiles');
export const EMPIRICO_PATH = new RelationKeyWithSection(CONOCIMIENTO_EMPIRICO_KEY, 'conocimiento_empirico', 'empirico');
export const FRAMEWORKS_PATH = new RelationKeyWithSection(FRAMEWORKS_KEY, 'frameworks', 'frameworks');
export const PATRONES_PATH = new RelationKeyWithSection(PATRONES_KEY, 'patrones', 'patrones');
export const UML_PATH = new RelationKeyWithSection(UML_KEY, 'uml', 'uml');
export const WEB_PATH = new RelationKeyWithSection(WEB_KEY, 'web', 'web');
export const COMPILACION_PATH = new RelationKeyWithSection(COMPILACION_KEY, 'compilacion', 'compilacion');