module ApplicationHelper
  def class_for_nav(page)
    if request.original_url.include?(page)
      return 'active'
    end
  end
end
