import Image from "next/image"
import styles from "../styles/components/processExcellence.module.scss"

export default function ProcessExcellence({ data }) {

    return (
        <div className={styles.Layout1} >
            <div class={styles.Top}>
                <h1>Process Excellence & Outsourcing Services</h1>
                <p>We specialize in handling projects on a turnkey basis for setting up manufacturing factories in India. Our expertise includes providing<b> techno-commercial experience, administrative assistance, and skilled manpower resources</b> to ensure seamless execution.</p>
            </div>
            <div class={styles.Middle}>
                <div>
                    <h2>Value-Added Services:</h2>
                    <ul>
                        <li><p><strong>Outsourcing Solutions:</strong> Procurement and supply of mechanical, pneumatic, and hydraulic components and its assemblies.</p></li>
                        <li><p><strong>Quality Assurance:</strong> Qualification, testing, and sourcing of components through third-party agencies.</p></li>
                        <li><p><strong>Logistics Management:</strong> Efficient coordination and execution of supply chain operations.</p></li>
                    </ul>
            
                    <h2>Engineering & Project Execution:</h2>
                    <ul>
                        <li><p><strong>CAD/CAM & Engineering Support:</strong> Conversion and breakdown of CAD assembly drawings.</p></li>
                        <li><p><strong>Precision & Quality Focus:</strong> Understanding tight tolerances, quality specifications, and metallurgical requirements as well as final finishing.</p></li>
                        <li><p><strong>Assembly Optimization:</strong> Enhancing assembly acceleration through fixture development and optimized joint designs.</p></li>
                    </ul>
                </div>
                <Image data-aos="fade-up" data-aos-offset="200" data-aos-anchor-placement="top-bottom" src="/assets/images/operational-excellence/1.png" alt={"Recyclable Packaging"} height={1000} width={1000} />
            </div>
            <div class={styles.Bottom}>
                <p>Packult has a dedicated and experienced Operational Excellence team that specializes in providing Process Excellence and Outsourcing solutions for engineering components and assemblies. Our expertise lies in ensuring high-quality delivery and performance, catering to engineering companies, machinery.</p>
            
                <p>Our Process Excellence services focus on optimizing materials and processes both Online and offline, developing standardized operating procedures (SOPs) for component manufacturing and assembly, and implementing waste management strategies to enhance productivity and efficiency. By refining processes and ensuring precision, we help businesses achieve higher operational performance while maintaining sustainability.</p>
                
                <p>Through our Machine Excellence services, we offer machine retrofitting, upgradation, and refurbishment, helping clients enhance productivity and reduce wastage. Additionally, we provide smooth machine decommissioning from one location and recommissioning at another, ensuring minimal downtime and operational continuity.</p>
                
                <p>At Packult, we are committed to delivering innovative, disruptive, and efficient solutions tailored to the evolving needs of the industry.</p>
            </div>
          
          
        </div>
      );
    };