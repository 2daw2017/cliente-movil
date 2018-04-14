import { NgModule } from '@angular/core';
import { ComponentsMensajeComponent } from './components-mensaje/components-mensaje';
import { ComponentsTareaComponent } from './components-tarea/components-tarea';
@NgModule({
	declarations: [ComponentsMensajeComponent,
    ComponentsTareaComponent,
    ],
	imports: [],
	exports: [ComponentsMensajeComponent,
    ComponentsTareaComponent,
    ]
})
export class ComponentsModule {}
