import { AppConfig } from '@/config/utils';
import logger, { setMode, createLogger, type ILogger } from '@zajno/common/logger';

setMode(AppConfig.ENABLE_LOGGER ? 'console' : false);

export default logger;

logger.log(AppConfig.FULL_VERSION);

export { createLogger };

export type { ILogger };
