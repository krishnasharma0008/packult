import React from 'react'
import AdminLayout from '../../../components/admin/adminLayout'
import styles from "../../../styles/admin/new-blog.module.scss";
import Align from '../../../components/admin/blog_components/align';
import Title from '../../../components/admin/blog_components/title';
import TitleWithDate from '../../../components/admin/blog_components/titleWithDate';
import TitleWithDate2 from '../../../components/admin/blog_components/titleWithDate2';
import Paragraph from '../../../components/admin/blog_components/paragraph';
import ImageView from '../../../components/admin/blog_components/imageView';
import ImageView2 from '../../../components/admin/blog_components/imageView2';


function index() {    
    return (
        <AdminLayout>
            <div className={styles.new_blog} >
                <Align alignment="left" padding={"1rem"}>
                    <button className={styles.new_cmponent_button}>
                        New Component
                    </button>
                </Align>
                <Align alignment="center" padding={"1rem"}>
                    <button className={styles.new_cmponent_button}>
                        New Component
                    </button>
                </Align>
                <Align alignment="right" padding={"1rem"}>
                    <button className={styles.new_cmponent_button}>
                        New Component
                    </button>
                </Align>

                <Align alignment="left" padding={".5rem"}>
                    <Title title="Component" />
                </Align>
                <Align alignment="center" padding={".5rem"}>
                    <Title title="Component" />
                </Align>
                <Align alignment="right" padding={".5rem"}>
                    <Title title="Component" />
                </Align>

                <Align alignment="left" padding={".5rem"}>
                    <TitleWithDate title="Component" date={" 21/07/2023 "} alignment={"left"} />
                </Align>
                <Align alignment="center" padding={".5rem"}>
                    <TitleWithDate title="Component" date={" 21/07/2023 "} alignment={"center"} />
                </Align>
                <Align alignment="right" padding={".5rem"}>
                    <TitleWithDate title="Component" date={" 21/07/2023 "} alignment={"right"} />
                </Align>

                <Align alignment="left" padding={".5rem"}>
                    <TitleWithDate2 title="Component" date={" 21/07/2023 "} alignment={"left"} type={"left"} />
                </Align>
                <Align alignment="left" padding={".5rem"}>
                    <TitleWithDate2 title="Component" date={" 21/07/2023 "} alignment={"left"} type={"right"} />
                </Align>

                <Align alignment="left" padding={".5rem"}>
                    <Paragraph>
                        kjhasdjhasd asdjujkasdf asdukijsadik vnsiudcvsd vjkjksdvjkls d
                    </Paragraph>
                </Align>
                <Align alignment="center" padding={".5rem"}>
                    <ImageView src={"https://th.bing.com/th?id=ORMS.a85f9621e9a5260ac349f7a8186f3770&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0"} name={"Test"} />
                </Align>
                <Align alignment="center" padding={".5rem"}>
                    <ImageView2
                        src1={"https://th.bing.com/th?id=ORMS.a85f9621e9a5260ac349f7a8186f3770&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0"}
                        name1={"Test"}
                        src2={"https://th.bing.com/th?id=ORMS.a85f9621e9a5260ac349f7a8186f3770&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0"}
                        name2={"Test"}
                    />
                </Align>

            </div>
        </AdminLayout>
    )
}

export default index