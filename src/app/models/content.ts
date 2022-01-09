// tslint:disable:max-line-length

export class Content {

    public temas: Item[] = [
        new Item('principios',
            ['- Las pruebas demuestran la presencia de defectos, por ende entre más pruebas halla mejor ',
                '- Es improductivo hacer pruebas exhaustivas, ademas de que es casi imposible de hacer ',
                '- Las pruebas tempranas ayudan a encontrar defectos con prontitud, y a su vez reducir tiempo y costos ',
                '- Agrupar defectos permite que las soluciones sean más especializadas, y las pruebas sean más efectivas ',
                '- La paradoja del pesticida, si nuestro software cambia, las pruebas tambien deben hacerlo, que sigan funcionando no siempre es buena señal ',
                '- Las pruebas dependen del contexto, entre más se parezca el entorno de pruebas al entorno de producción mejor ',
                '- Que no se presenten errores no significa que no se presentaran errores, solo que no se han dado las condiciones ',
            ]
        ),
        new Item('manifiesto',
            [
                '- El testing no es una fase más, siempre debe estar presente en todo el desarrollo ',
                '- La calidad no depende solo de las pruebas, es un proceso constante durante todo el ciclo de vida ',
                '',
                ' - Testing inicial <strong> SOBRE </strong> testing final ',
                ' - Prevenir bugs <strong> SOBRE </strong> encontrar bugs ',
                ' - Entender que se prueba <strong> SOBRE </strong> probar una funcionalidad ',
                ' - Construir un mejor sistema <strong> SOBRE </strong> destruir el sistema ',
                ' - Responsabilidad del equipo <strong> SOBRE </strong> la responsabilidad del tester ',

            ]),
        new Item('QAperson',
            [
                '- Quality Assurance (seguro de calidad) es un concepto donde todos los involucrados deben aportar, ',
                ' - aunque haya personas especificas para verificar su cumplimiento ',
                '- Todo proyecto deberia contar con un plan de pruebas que asegure la calidad del proyecto entregado ',
                '- La integración continua y los tests son herramientas con las que el proyecto deberia contar desde su inicio ',
                '- El encargado de estos aspectos debe ser el intermediario entre los clientes y sus espectativas y lo que ha sido elaborado ',
                '- Tambien es el encargado de crear ambientes de prueba que sean similares al ambiente de producción ',
            ]),
        new Item('tiposPruebas',
            [
                '- Funcionales    -> prueban las funcionalidades del sistema y suelen ser de caja negra, al validar el QUE más que el COMO ',
                '- No Funcionales -> estas validan cosas como carga, estres, rendimiento, confiabilidad, etc... ',
                '',
                '- Estructurales -> indagan la estructura interna del programa y sus relaciones, aca se pueden incluir las pruebas unitarias y de integración ',
                '- Estructurales -> estan son de tipo caja blanca, ya que es necesario conocer todo el sistema y como funciona para que sean bien planificadas ',
                '',
                '- Regresión -> basicamente es volver a correr todas la pruebas despues de que se cambien componentes ó se corrija un problema ',
                '- Regresión -> dependiendo de la cantidad de pruebas que hayan y de su complejidad puede ser una operación bastante demorada ',
            ]
        ),
        new Item('beneficios',
            [
                '- La calidad mejora al encontrar errores en etapas previas y durante el desarrollo, en vez de hacerlo en etapas finales ',
                '- Los cambios son hechos de manera más agil al inducir una mayor comunicación con todo el equipo ',
                '- Reducen el tiempo y los costos asociados a la mantenibilidad del software ',
                '- Los tests pueden tener documentación la cual no debe ser muy extensa, y tambien pueden servir como documentación ',
            ]),
        new Item('nombramiento',
            [
                '- Representa el intercambio de mensajes entre los diferentes componentes del sistema para lograr una funcionalidad ',
                '- El tiempo es importante ya que un mensaje debe terminar para que otro empieze (generalmente) ',
                '- Los objetos que interactuan puede ser simple clases, hasta modulos y sistemas completos ',
                '- El diablo esta en los detalles, saber nombrar los elementos que intervienen ayudara al analisis ',
                '',
                '- Clases -> deberian tener un indicador que las agrupe, como: (nombreClase)Test ',
                '- Metodos -> hay varias convenciones, pero generalmente deben incluir:  ',
                '  - nombre del metodo, estado a probar, comportamiento esperado; tambien se pueden incluir las palabras de given, when, should, test  ',
                '',
                '- Variables -> deben describir el proposito de cada variable, no deben ser resumidas ni genericas, algunos ejemplos pueden ser: ',
                '  - target, expected, actual, valid, invalid, Object(Mock)',
            ]),
        new Item('first',
            [
                ' Fast            -> los tests unitarios deben ser lo más rapido posible, ya que se suelen tener cientos de pruebas y ejecutarlas conlleva tiempo y recursos ',
                ' Independent     -> cada test debe ser independiente de los demás, de lo contrario habra un acoplamiento no deseado ',
                ' Repeatable      -> las pruebas deben funcionar en cualquier ambiente que se ejecuten, ya sea local o en un ambiente de integración ',
                ' Self-Validating -> las pruebas deben mostrar resultados concluyentes, estos no deben tener intervención humana para que sean validos ',
                ' Timely          -> toda prueba debe ser oportuna y debe tener una razon de ser, si no se pueden justificar, estas habran sido una perdida de tiempo ',
            ]),
        new Item('sutydoc',
            [
                '- System Under Test ',
                '  - Es aquello que se esta probando ya sea una clase, un componente, una funcionalidad ',
                '- Depend On Component ',
                '  - Es lo que necesita cada SUT para poder funcionar, y que la prueba pueda ser llevada a cabo ',
                '- Organización ',
                '  - Generalmente se organizan mediante una tabla que contiene el tipo de prueba, los SUTs y los DOCs ',
            ]),
        new Item('dobles',
            [
                '- Son objetos que se comportan de manera igual que el elemento que copian, pero son más simples de manejar ',
                ' - Dummy -> Es un objeto con valore concretos que solo sirve para que se cumplan ciertas precondiciones ',
                ' - Fake  -> son funcionales y se comportan igual que en producción, solo que de una manera más simple y limitada ',
                ' - Stub  -> Es un objeto que ya viene con una información predefinida, en vez de información real e impredecible ',
                ' - Mock  -> Son objetos que actuan de acuerdo a una llamada en especifico, de lo contrario no funcionaran debidamente ',
                ' - Spies -> Este objeto se encarga de visualizar todos los procesos y llamados internos, verificando que sean los desados ',
            ]),
        new Item('aaa',
            [
                '- Arrange -> en esta parte se organiza todo lo necesario y se deben establecer las condiciones del test ',
                '- Act     -> es la ejecución del fragmento a testear',
                '- Assert  -> ultimo paso de la prueba y es la comprobación de lo resultados ',
            ]),
        new Item('gwt',

            [
                '- Funciona de la misma manera que AAA, con algunas ventajas (Given, When, Then)',
                '- Puede ser usado con frameworks de BDD, es más que solo una estructura',
                '- Es obicuo por lo que más personas pueden entenderlo sin necesidad de un conocimiento completo del sistema ',
                '- Añade valor extra al negocio, al interconectar el codigo y las pruebas a un nivel mayor ',

            ]),
        new Item('piramide',
            [
                '        Exploracion                                                 ',
                '         GUI  Tests          Piramide de tests:                     ',
                '       API      Tests        La mayor parte de las pruebas deberian ',
                '     Integration  Tests      ser unitarias, y la menor parte        ',
                '   Component       Tests     deberian ser la interfaz grafica       ',
                ' Unit               Tests                                           ',
                '',
                '        Exploracion                                                 ',
                ' GUI                Tests    Cono de helado:                        ',
                '   API             Tests     Es un anti patron de pruebas           ',
                '     Integration  Tests      Donde la mayoria de pruebas son        ',
                '       Component Tests       de la interfaz graficas                ',
                '         Unit   Tests        y NO pruebas unitarias                 ',
            ]),
        new Item('triangulo',
            [
                '         Alcance              Alcance -> requisitos ó tareas a realizar            ',
                '                              Tiempo -> planificicación de la duración del proyecto ',
                '         Calidad              Costos -> recursos a gastar el proyecto              ',
                '                                                                                   ',
                '   Costo         Tiempo                                                            ',
            ]),
        new Item('cobertura', [
            '- La cobertura del codigo es fundamental para garantizar un alcance optimo de las pruebas ',
            '- No hay un numero magico para todos los proyectos, cada uno tendra una cobertura ideal',
            '- El 100% de esta cobertura no es garantia de ausencia de errores, como el 50% no es garantia de la calidad de las pruebas ',
            '- Esto es importante ya que se puede usar para hacer despliegues e integración continua, y encontrar codigo muerto ',
            '- Existen varios tipos de cobertura, pero el más usado es la cobertura de las lineas de codigo ',
        ]),
        new Item('falsos', [
            '- Falsos Positivos & Falsos Negativos ',
            '- Son comunes en ambientes inestables, ó poco hermeticos ',
            '',
            '- Falso Positivo -> ocurre cuando se detectan defectos, que no son culpa del componente inmediato ',
            '  - Esto puede ser debido a fuentes externas de error, inestabilidad del ambiente, errores de los datos ',
            '',
            '- Falso Negativo -> ocurre cuando no se detectan errores, que estan presentes en lo que se esta probando ',
            '  - Suelen suceder por pruebas mal desarrolladas, más que por el propio entorno ',
        ])

    ];

}

export class Item {

    key = '';
    content: string[] = [];

    constructor(key: string, content: string[]) {
        this.key = key;
        this.content = content;
    }

}
