import { useState, useEffect } from 'react';
import { useFetchArticleBeforeAnHourEnds } from './hooks/useFetchArticleBeforeAnHourEnds';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const EditArticle = ({ articleId }) => {
  const { article, loading, error } = useFetchArticleBeforeAnHourEnds(articleId);
  const [formData, setFormData] = useState({});
  const [isEditable, setIsEditable] = useState(true);

  useEffect(() => {
    if (article) {
      setFormData(article);
      // Check if the article is still editable (within 1 hour of creation)
      const createdAt = new Date(article.created_at);
      const oneHourLater = new Date(createdAt.getTime() + 60 * 60 * 1000);
      setIsEditable(new Date() < oneHourLater);
    }
  }, [article]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated formData to your API
    console.log('Submitting updated article:', formData);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!article) return <div>No article found</div>;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">Edit Article</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title || ''}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description || ''}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div>
            <Label htmlFor="keywords">Keywords</Label>
            <Input
              id="keywords"
              name="keywords"
              value={formData.keywords || ''}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="word_count">Word Count</Label>
              <Input
                id="word_count"
                name="word_count"
                value={formData.word_count || ''}
                onChange={handleInputChange}
                disabled={!isEditable}
              />
            </div>
            <div>
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                name="duration"
                value={formData.duration || ''}
                onChange={handleInputChange}
                disabled={!isEditable}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="complexity">Complexity</Label>
              <Input
                id="complexity"
                name="complexity"
                value={formData.complexity || ''}
                onChange={handleInputChange}
                disabled={!isEditable}
              />
            </div>
            <div>
              <Label htmlFor="language">Language</Label>
              <Input
                id="language"
                name="language"
                value={formData.language || ''}
                onChange={handleInputChange}
                disabled={!isEditable}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                value={formData.quantity || ''}
                onChange={handleInputChange}
                disabled={!isEditable}
              />
            </div>
            <div>
              <Label htmlFor="cost">Cost</Label>
              <Input
                id="cost"
                name="cost"
                type="number"
                step="0.01"
                value={formData.cost || ''}
                onChange={handleInputChange}
                disabled={!isEditable}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <Input
              id="status"
              name="status"
              value={formData.status || ''}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div className="flex items-center">
            <input
              id="is_paid"
              name="is_paid"
              type="checkbox"
              checked={formData.is_paid || false}
              onChange={(e) => setFormData(prev => ({ ...prev, is_paid: e.target.checked }))}
              disabled={!isEditable}
              className="mr-2"
            />
            <Label htmlFor="is_paid">Is Paid</Label>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        {isEditable ? (
          <Button type="submit" onClick={handleSubmit}>Save Changes</Button>
        ) : (
          <p className="text-red-500">Editing time has expired</p>
        )}
      </CardFooter>
    </Card>
  );
};

export default EditArticle;