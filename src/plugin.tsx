import React, { ElementType, FC } from 'react'

interface HBTPlugin {
  name: string
  settingComponent: ElementType
  mounted?: () => void
  addedRecord?: (record: any) => void
}
function createPlugin(plugin: HBTPlugin) {
  return plugin
}
// import { createPlugin } from '@hbt/core'

const Setting: FC = () => {
  return <div>111</div>
}

const plugin = createPlugin({
  name: 'HBTPluginOBS',
  settingComponent: Setting,
  addedRecord: (record) => {
    console.log(record)
  },
})

export default plugin
