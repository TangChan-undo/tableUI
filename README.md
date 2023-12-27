# tc_table_ui 组件库

### 快速开始

#### 1.安装组件库

```bash
npm i tc_table_ui
```

#### 2.引用组件库

```javascript
//全部引用
import 'tc_table_ui/dist/css/index.css'
import TUI from 'tc_table_ui'
Vue.use(TUI)

//按需引入
import 'tc_table_ui/dist/css/staticTable.css'
import 'tc_table_ui/dist/css/dynamicTable.css'
import 'tc_table_ui/dist/css/InteractiveTable.css'

import staticTable from 'tc_table_ui'
import dynamicTable from 'tc_table_ui'
import InteractiveTable from 'tc_table_ui'
Vue.use(staticTable)
Vue.use(dynamicTable)
Vue.use(InteractiveTable)
```
