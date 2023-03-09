import { motion } from 'framer-motion';
import React from 'react';

function framer(){
    return(
        <div>
            <motion.button whileHover= {{ scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 80x rgb(255,255,255)",
            }}></motion.button>
            
                Create Your Pizza

            <motion.button></motion.button>
        </div>
    );
}
export default framer;