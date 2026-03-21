import { ANALISIS_DATA_KEY, HARDWARE_KEY, PERSISTENCY_ADVANCED_KEY, PERSISTENCY_KEY } from "./linkReferencia";
import { RelationKeyWithSection } from "./models";

export const HARDWARE_PATH = new RelationKeyWithSection(HARDWARE_KEY, 'hardware', 'hardware');
export const ANALISIS_DATA_PATH = new RelationKeyWithSection(ANALISIS_DATA_KEY, 'analisis_data', 'analisisData');
export const PERSISTENCY_PATH = new RelationKeyWithSection(PERSISTENCY_KEY, 'persistency', 'persistency');
export const PERSISTENCY_ADVANCED_PATH = new RelationKeyWithSection(PERSISTENCY_ADVANCED_KEY, 'persistency_advanced', 'persistency');