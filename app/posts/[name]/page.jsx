
import {getPost} from '../../../helpers/api';
export default async function Post({params}){
    const post = await getPost(params.name)
    return (
        <>
        <div className="py-5">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{post.name}</div>
                <h3 class="text-xl mb-2">{post.email}</h3>
                <h3 class="text-xl mb-2">{post.address.street}</h3>
                <p class="text-gray-700 text-base">
                {post.company.name}
                </p>
  </div>

</div>
</div>
        </>
    )
}