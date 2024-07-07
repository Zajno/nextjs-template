import * as git from 'git-rev-sync';
import { type Environments } from '.';
import { getFullVersionName } from './version';
import { CurrentConfig } from '.';
import path from 'path';
import { fileURLToPath } from 'url';
import { version, name as appName } from '../../package.json';

const DefaultEnvironment = 'development';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// fill *required* env variables here. they might not exist, but should be listed anyway

const appHash = process.env.APP_HASH || git.short(__dirname);
const appEnv = process.env.APP_ENV || process.env.NODE_ENV || DefaultEnvironment;

export const requiredEnv = {
    APP_ENV: appEnv,
    APP_HASH: appHash,
    APP_URL: CurrentConfig.Hostname,
    FULL_VERSION: `${appName} ${getFullVersionName(version, appEnv as Environments, appHash)}`,
    ENABLE_LOGGER: CurrentConfig.EnableLogger,
};

