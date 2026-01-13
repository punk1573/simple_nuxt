// https://nuxt.com/docs/api/configuration/nuxt-config
import { builtinModules } from 'module'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
	// 明确告知 Nitro，这些模块是 Node.js 环境提供的，不要打包
	externals: {
		external: builtinModules
	}
  }
})
