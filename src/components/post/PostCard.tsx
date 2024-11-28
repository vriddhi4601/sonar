import React from 'react';
import { Post } from '../../types';
import { format } from 'date-fns';
import { Avatar } from '../common/Avatar';

interface Props {
  post: Post;
  onUserClick?: () => void;
}

export const PostCard: React.FC<Props> = ({ post, onUserClick }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-4 flex items-center space-x-3">
        <Avatar
          src={post.userDpUrl}
          alt={post.userName}
          showStatus
          onClick={onUserClick}
        />
        <div>
          <h3 className="font-semibold text-lg">{post.userName}</h3>
          {post.location && (
            <p className="text-gray-400 text-sm">{post.location}</p>
          )}
        </div>
      </div>
      
      <img
        src={post.mediaUrl}
        alt={post.title}
        className="w-full aspect-video object-cover"
      />
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-gray-400 text-sm">
            {format(new Date(post.timestamp), 'MMM d, yyyy')}
          </p>
        </div>
        <h4 className="font-semibold mb-2">{post.title}</h4>
        <p className="text-gray-200">{post.caption}</p>
      </div>
    </div>
  );
};