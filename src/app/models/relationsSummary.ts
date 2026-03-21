import {
    ANALISIS_DATA_KEY, ANALISIS_KEY, HARDWARE_KEY, METODOLOGIAS_KEY, PARADIGMAS_KEY, PERSISTENCY_ADVANCED_KEY, PERSISTENCY_KEY,
    SYSTEM_DESIGN_KEY, TESTING_ADVANCED_KEY, TESTING_KEY
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