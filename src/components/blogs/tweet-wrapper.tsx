import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from 'react-tweet';
import { getTweet, QuotedTweet, Tweet, TweetEntities } from 'react-tweet/api';
import { Suspense } from 'react';

function ensureEntities(tweet: Tweet | QuotedTweet): Tweet | QuotedTweet {
  if (!tweet.entities) tweet.entities = {} as TweetEntities;
  tweet.entities.hashtags ??= [];
  tweet.entities.user_mentions ??= [];
  tweet.entities.urls ??= [];
  tweet.entities.symbols ??= [];
  return tweet;
}

async function TweetContent({ id }: { id: string }) {
  const data = await getTweet(id).catch(() => null);
  if (!data) return <TweetNotFound />;
  ensureEntities(data);
  if (data.quoted_tweet) ensureEntities(data.quoted_tweet);
  return <EmbeddedTweet tweet={data} />;
}

export function SafeTweet({ id }: { id: string }) {
  return (
    <Suspense fallback={<TweetSkeleton />}>
      <TweetContent id={id} />
    </Suspense>
  );
}
