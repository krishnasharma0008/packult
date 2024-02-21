import Image from 'next/image';
import { useState } from 'react';
import AdminLayout from '../../../components/admin/adminLayout';
import styles from '../../../styles/admin/components/layouts.module.scss';
import { uploadData } from '../../../utils/firebase_data_handler';
import { ADMIN_ROUTES } from '../../../common/routes';
import { useRouter } from 'next/router';
import { queryClient } from '../../_app';
import { uploadImageArray } from '../../../utils/firebase_image_upload';

function Index() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const placeHolder = 'Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.';

    const [imageData, setImageData] = useState([
        {
            id: 'image1',
            url: '/assets/admin/dummyImage.jpg',
        },
        {
            id: 'image2',
            url: '/assets/admin/dummyImage.jpg',
        },
    ]);

    const handleImageData = (e, id) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const newImageData = imageData.map((image) =>
                image.id === id
                    ? {
                        id: image.id,
                        url: reader.result,
                    }
                    : image
            );
            setImageData(newImageData);
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const image1 = e.target[0].files[0];
        const image2 = e.target[5].files[0];
        const title = e.target[1].value;
        const date = e.target[2].value;
        const para1 = e.target[3].value;
        const para2 = e.target[4].value;
        const para3 = e.target[6].value;
        const para4 = e.target[7].value;
        const para5 = e.target[8].value;
        const para6 = e.target[9].value;

        const imageArray = [
            { id: 'image1', file: image1 },
            { id: 'image2', file: image2 },
        ];

        const slug = title.toLowerCase().split(' ').join('-');
        const layout = 'layout2';

        const resp = uploadImageArray(imageArray, 'packarma_blog');
        resp.then((res) => {
            if (res.message === 'success') {
                const data = {
                    title,
                    slug,
                    date,
                    para1,
                    para2,
                    para3,
                    para4,
                    para5,
                    para6,
                    layout,
                    images: res.data,
                };
                uploadData(data, 'packarma_blog', slug).then((res) => {
                    if (res.message === 'success') {
                        alert('Blog Uploaded');
                        queryClient.invalidateQueries('packarma_blog');
                        setLoading(false);
                        router.push(ADMIN_ROUTES.PACKARMA_BLOGS);
                    }
                });
            } else {
                alert('Blog Upload Failed');
                setLoading(false);
            }
        });
    };

    return (
        <AdminLayout>
            <div className={styles.layout2}>
                {loading ? (
                    <h3>Posting the blog ...</h3>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.head}>
                            <div className={styles.image}>
                                <label htmlFor="layout2_image1">
                                    <Image
                                        src={imageData.find((image) => image.id === 'image1').url}
                                        name="image1"
                                        height={1000}
                                        width={1000}
                                        alt="dummyImage"
                                    />
                                </label>
                                <input onChange={(e) => handleImageData(e, 'image1')} required type="file" id="layout2_image1" />
                            </div>
                            <div>
                                <input required type="text" placeholder="Title" />
                                <input required type="date" />
                                <br />

                                <textarea
                                    required
                                    placeholder={placeHolder + placeHolder}
                                    cols="30"
                                    rows="10"
                                ></textarea>
                                <br />
                                <textarea
                                    required
                                    placeholder={placeHolder}
                                    cols="30"
                                    rows="10"
                                ></textarea>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <label htmlFor="layout2_image2">
                                <Image
                                    src={imageData.find((image) => image.id === 'image2').url}
                                    name="image2"
                                    height={1000}
                                    width={1000}
                                    alt="dummyImage"
                                />
                            </label>
                            <input onChange={(e) => handleImageData(e, 'image2')} required type="file" id="layout2_image2" />
                            <textarea
                                placeholder={placeHolder}
                                cols="30"
                                rows="10"
                            ></textarea>{' '}
                            <br />
                            <textarea

                                placeholder={placeHolder}
                                cols="30"
                                rows="10"
                            ></textarea>{' '}
                            <br />
                            <textarea

                                placeholder={placeHolder}
                                cols="30"
                                rows="10"
                            ></textarea>{' '}
                            <br />
                            <textarea

                                placeholder={placeHolder}
                                cols="30"
                                rows="10"
                            ></textarea>{' '}
                            <br />
                        </div>
                        <button type="submit">Post</button>
                    </form>
                )}
            </div>
        </AdminLayout>
    );
}

export default Index;
