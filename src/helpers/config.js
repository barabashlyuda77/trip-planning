import localConfig from '../config/config.local.json';
import productionConfig from '../config/config.production.json';

export default () => {
  return process.env.NODE_ENV === 'production' ? productionConfig : localConfig;
}
